import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Paragraph,
  ButtonContainer,
  ColorPickerContainer,
  Label,
  ColorPickerInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    appliedGradient: `${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  changeDirection = direction => {
    this.setState({direction})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickGenerate = () => {
    const {direction, firstColor, secondColor} = this.state
    this.setState({
      appliedGradient: `${direction},${firstColor},${secondColor}`,
    })
  }

  render() {
    const {direction, firstColor, secondColor, appliedGradient} = this.state

    return (
      <GradientContainer
        appliedGradient={appliedGradient}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <ButtonContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              type="button"
              value={eachDirection.value}
              isActive={direction === eachDirection.value}
              displayText={eachDirection.displayText}
              direction={eachDirection.value}
              onChangeDirection={this.changeDirection}
            />
          ))}
        </ButtonContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorPickerContainer>
          <Label>{firstColor}</Label>
          <Label>{secondColor}</Label>
          <ColorPickerInput
            type="color"
            value={firstColor}
            onChange={this.onChangeFirstColor}
          />
          <ColorPickerInput
            type="color"
            value={secondColor}
            onChange={this.onChangeSecondColor}
          />
        </ColorPickerContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
