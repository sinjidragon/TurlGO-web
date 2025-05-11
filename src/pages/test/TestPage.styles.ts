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
  font-size: 2.2rem;
  font-weight: bold;
  color: #FF69B4;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`

export const TestImage = styled.img`
  width: 280px;
  height: auto;
  margin: 2.5rem auto;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

export const FormSection = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 25px;
  border: 2px solid #FFE4E9;
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
  border: 2px solid #FFE4E9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFB6C1;
    background-color: #FFFAFA;
  }

  &:hover {
    border-color: #FFB6C1;
  }
`

export const Select = styled.select`
  padding: 1rem;
  border: 2px solid #FFE4E9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF69B4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    border-color: #FFB6C1;
    background-color: #FFFAFA;
  }

  &:hover {
    border-color: #FFB6C1;
  }
`

export const Button = styled.button`
  padding: 1.2rem;
  background-color: #FF69B4;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background-color: #FF1493;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);

    &:before {
      left: 100%;
    }
  }

  &:disabled {
    background-color: #FFB6C1;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

export const ResultSection = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 25px;
  border: 2px solid #FFE4E9;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ResultCard = styled.div`
  background: #FFF5F7;
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #FFE4E9;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #FFB6C1;
    box-shadow: 0 5px 15px rgba(255, 182, 193, 0.15);
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
