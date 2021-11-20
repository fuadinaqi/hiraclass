import Styled from './styles'

function Card({ src, alt, color, width, height, children, rightGrid, ...props }) {
  return (
    <Styled.Wrapper color={color} width={width} height={height} rightGrid={rightGrid} {...props}>
      <div className="card-content">{children}</div>
      <img src={src} alt={alt} />
    </Styled.Wrapper>
  )
}

Card.defaultProps = {
  src: '',
  alt: '',
  color: '#2F281E',
  width: '400px',
  height: '308px',
  rightGrid: '200px'
}

export default Card
