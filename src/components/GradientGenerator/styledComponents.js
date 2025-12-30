import styled from 'styled-components'

export const GradientContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to ${props => props.appliedGradient});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0px;
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  text-align: center;
`
export const ColorPickerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 15px 0px;
`
export const Label = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  text-align: center;
`

export const ColorPickerInput = styled.input`
  width: 140px;
  height: 35px;
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  border-radius: 25px;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`
