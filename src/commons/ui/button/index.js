import Styled from './styles'

function Button({ children, type, padding, ...props }) {
  return (
    <Styled.Wrapper type={type} padding={padding} {...props}>
      {children}
    </Styled.Wrapper>
  )
}

Button.defaultProps = {
  type: 1,
  padding: ''
}

export default Button
