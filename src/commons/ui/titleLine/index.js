import theme from 'theme'
import Styled from './styles'

function TitleLine({ titleColor, lineColor, size, children, ...props }) {
  return (
    <Styled.Wrapper lineColor={lineColor} titleColor={titleColor} size={size} {...props}>
      <div className="title">{children}</div>
      <div className="line" />
    </Styled.Wrapper>
  )
}

TitleLine.defaultProps = {
  lineColor: theme.primary,
  titleColor: theme.black,
  size: ''
}

export default TitleLine
