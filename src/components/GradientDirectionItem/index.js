import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, isActive, onChangeDirection, displayText} = props

  const onClickDirection = () => {
    onChangeDirection(direction)
  }

  return (
    <CustomButton active={isActive} type="button" onClick={onClickDirection}>
      <li>{displayText}</li>
    </CustomButton>
  )
}
export default GradientDirectionItem
