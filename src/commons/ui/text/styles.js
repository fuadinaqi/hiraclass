import styled, { css } from 'styled-components'

const obj = {
  Wrapper: styled.div`
    ${(props) =>
      props.align &&
      css`
        text-align: ${props.align};
      `};
    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `};
    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `};
    ${(props) =>
      props.weight &&
      css`
        font-weight: ${props.weight};
      `};
    ${(props) =>
      props.height &&
      css`
        line-height: ${props.height};
      `};
    ${(props) =>
      props.size &&
      css`
        font-size: ${props.size};
      `};
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `};
  `
}

export default obj
