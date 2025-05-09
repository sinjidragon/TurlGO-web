import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF69B4;
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`

export const TestImage = styled.img`
  width: 300px;
  height: auto;
  margin: 2rem auto;
  display: block;
`

export const FormSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(255, 105, 180, 0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  padding: 1rem;
  border: 2px solid #FFB6C1;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #FF69B4;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.1);
  }
`

export const Select = styled.select`
  padding: 1rem;
  border: 2px solid #FFB6C1;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #FF69B4;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.1);
  }
`

export const Button = styled.button`
  padding: 1rem;
  background-color: #FF69B4;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;

  &:hover {
    background-color: #FF1493;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #FFB6C1;
    cursor: not-allowed;
    transform: none;
  }
`

export const ResultSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(255, 105, 180, 0.1);
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ResultCard = styled.div`
  background: #FFF5F7;
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid #FFB6C1;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

export const ResultTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #FF69B4;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ResultText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`

export const MatchPercentage = styled.span`
  background-color: white;
  color: #FF69B4;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid #FFB6C1;
`
