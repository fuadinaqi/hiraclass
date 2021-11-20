import styled, { css } from 'styled-components'

const getColor = (props) => {
  const { type, theme } = props
  if (type === 2) return theme.yellow
  return theme.primary
}

const obj = {
  Wrapper: styled.button`
    border-radius: 4px;
    ${(props) =>
      props.padding
        ? css`
            padding: ${props.padding};
          `
        : css`
            padding: 10px 16px;
          `};

    cursor: pointer;
    font-weight: 600;
    border: 0;
    color: #fff;
    background-color: ${(props) => getColor(props)};
    border-bottom: solid 3px ${(props) => getColor(props)};

    :hover,
    :active {
      border-bottom-color: ${(props) => props.theme.black};
    }
  `
}

export default obj
