import { useState, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import AuthInput from './AuthInput'
import { useSendVerification, useVerifyEmail } from '@/services/auth'

const VerificationButton = styled.button<{ $isVerified?: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme, $isVerified }) => 
    $isVerified ? theme.colors.success : theme.colors.primary};
  padding: 8px;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Timer = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 14px;
  margin-left: 4px;
`

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`

interface Props {
  email: string
  verifyCode: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onVerifyCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onVerificationComplete: () => void
}

const EmailVerification = ({
  email,
  verifyCode,
  onEmailChange,
  onVerifyCodeChange,
  onVerificationComplete,
}: Props) => {
  const [showVerifyInput, setShowVerifyInput] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isVerified, setIsVerified] = useState(false)
  
  const sendVerification = useSendVerification()
  const verifyEmail = useVerifyEmail()

  const startTimer = useCallback(() => {
    setTimeLeft(300) // 5 minutes in seconds
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSendVerification = async () => {
    if (!email) return
    try {
      await sendVerification.mutateAsync({ email })
      setShowVerifyInput(true)
      startTimer()
    } catch (err) {
      // Error is handled by the mutation
    }
  }

  const handleVerifyEmail = async () => {
    if (!email || !verifyCode) return
    try {
      await verifyEmail.mutateAsync({
        email,
        verifyCode,
      })
      setIsVerified(true)
      onVerificationComplete()
    } catch (err) {
      // Error is handled by the mutation
    }
  }

  const canRequestVerification = !isVerified && !sendVerification.isPending && timeLeft === 0

  return (
    <VerificationContainer>
      <div style={{ position: 'relative' }}>
        <AuthInput
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="이메일을 입력해주세요"
          type="email"
          error={sendVerification.error?.message}
        />
        <VerificationButton
          onClick={handleSendVerification}
          disabled={!email || sendVerification.isPending || isVerified}
          $isVerified={isVerified}
        >
          {isVerified ? '인증완료' : (
            <>
              {canRequestVerification ? '인증요청' : (
                <>
                  재요청
                  {timeLeft > 0 && <Timer>{formatTime(timeLeft)}</Timer>}
                </>
              )}
            </>
          )}
        </VerificationButton>
      </div>
      {showVerifyInput && !isVerified && (
        <div style={{ position: 'relative' }}>
          <AuthInput
            name="verifyCode"
            value={verifyCode}
            onChange={onVerifyCodeChange}
            placeholder="인증번호를 입력해주세요"
            type="text"
            error={verifyEmail.error?.message}
          />
          <VerificationButton
            onClick={handleVerifyEmail}
            disabled={!verifyCode || verifyEmail.isPending}
          >
            확인
          </VerificationButton>
        </div>
      )}
    </VerificationContainer>
  )
}

export default EmailVerification
