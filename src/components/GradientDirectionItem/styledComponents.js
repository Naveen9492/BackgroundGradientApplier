import styled from 'styled-components'

export const CustomButton = styled.button`
  width: 140px;
  height: 35px;
  margin-botton: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #014f7b;
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
