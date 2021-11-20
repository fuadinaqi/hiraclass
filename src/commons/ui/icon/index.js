import theme from 'theme'
import Styled from './styles'

function Icon({ color, src, alt }) {
  return (
    <Styled.Wrapper color={color}>
      <img src={src} alt={alt} width="70%" height="70%" />
    </Styled.Wrapper>
  )
}

Icon.defaultProps = {
  src: '',
  alt: 'hiraclass',
  color: theme.primary
}

export default Icon
