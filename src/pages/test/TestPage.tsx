import { useState } from 'react'
import { useTestMutation } from '@/hooks/queries/test'
import { TestResult } from '@/types/test'
import {
  Container,
  Header,
  Title,
  Subtitle,
  TestImage,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
  FormSection,
  ResultSection,
  ResultContainer,
  ResultCard,
  ResultTitle,
  ResultText,
  MatchPercentage,
} from './TestPage.styles'
import cat2 from '../../assets/cat2.png'
const dogImage = '/assets/dog.svg'

const TestPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    housingType: '',
    preferredAnimal: '',
    preferredPersonality: '',
    sheddingSensitivity: '',
    availableTime: '',
    budget: '',
    hasAllergy: '',
  })
  const [results, setResults] = useState<TestResult[]>([])
  const testMutation = useTestMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await testMutation.mutateAsync(formData)
      console.log('Response from server:', response)
      setResults(response)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting test:', error)
      alert('테스트 제출에 실패했습니다.')
    }
  }

  return (
    <Container>
      <FormSection>
        <Header>
          <Title>나에게 맞는 반려동물 찾기</Title>
          <Subtitle>AI가 추천하는 맞춤형 반려동물을 만나보세요</Subtitle>
          <TestImage src={isSubmitted ? dogImage : cat2} alt="반려동물 테스트" />
        </Header>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>주거형태</Label>
          <Select
            name="housingType"
            value={formData.housingType}
            onChange={handleChange}
            required
          >
            <option value="">선택해주세요</option>
            <option value="아파트">아파트</option>
            <option value="단독주택">단독주택</option>
            <option value="빌라 / 다세대 주택">빌라 / 다세대 주택</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>선호 동물</Label>
          <Select
            name="preferredAnimal"
            value={formData.preferredAnimal}
            onChange={handleChange}
            required
          >
            <option value="">선택해주세요</option>
            <option value="고양이">고양이</option>
            <option value="강아지">강아지</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>선호 성격</Label>
          <Input
            type="text"
            name="preferredPersonality"
            value={formData.preferredPersonality}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>털 빠짐 민감도</Label>
          <Select
            name="sheddingSensitivity"
            value={formData.sheddingSensitivity}
            onChange={handleChange}
            required
          >
            <option value="">선택해주세요</option>
            <option value="매우 민감">매우 민감</option>
            <option value="어느정도 신경 쓰는 편">어느정도 신경 쓰는 편</option>
            <option value="신경쓰지 않음">신경쓰지 않음</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>반려동물과 보낼 수 있는 예상 시간</Label>
          <Input
            type="text"
            name="availableTime"
            value={formData.availableTime}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>반려동물을 위해 사용할 수 있는 예산</Label>
          <Input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>알러지 여부</Label>
          <Select
            name="hasAllergy"
            value={formData.hasAllergy}
            onChange={handleChange}
            required
          >
            <option value="">선택해주세요</option>
            <option value="예">예</option>
            <option value="아니오">아니오</option>
          </Select>
        </FormGroup>

        <Button type="submit" disabled={testMutation.isPending}>
          {testMutation.isPending ? '분석중...' : '테스트 시작하기'}
        </Button>
      </Form>
      </FormSection>

      <ResultSection>
        {results.length > 0 ? (
          <ResultContainer>
            {results.map((result, index) => (
              <ResultCard key={index}>
                <ResultTitle>
                  {result.견종}
                  <MatchPercentage>{result.퍼센테이지}% 매칭</MatchPercentage>
                </ResultTitle>
                <ResultText>성격: {result.성격}</ResultText>
                <ResultText>특성: {result.특성}</ResultText>
              </ResultCard>
            ))}
          </ResultContainer>
        ) : (
          <div style={{ textAlign: 'center', color: '#666' }}>
            <p>테스트를 완료하면 이곳에 결과가 표시됩니다.</p>
          </div>
        )}
      </ResultSection>
    </Container>
  )
}

export default TestPage
