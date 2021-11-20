import theme from 'theme'
import Styled from './styles'

function Text({ weight, align, width, height, size, color, margin, children }) {
  return (
    <Styled.Wrapper
      width={width}
      align={align}
      weight={weight}
      height={height}
      size={size}
      color={color}
      margin={margin}
    >
      {children}
    </Styled.Wrapper>
  )
}

Text.defaultProps = {
  weight: 400,
  height: '26px',
  width: '',
  size: '16px',
  margin: '',
  align: '',
  color: theme.black
}

export default Text
