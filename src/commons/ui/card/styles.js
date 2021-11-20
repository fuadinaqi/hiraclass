import styled, { css } from 'styled-components'

const obj = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr ${(props) => props.rightGrid};
    border-radius: 32px;
    overflow: hidden;
    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
        min-width: ${props.width};
      `};
    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `};
    ${(props) =>
      props.color &&
      css`
        background-color: ${props.color};
      `};

    > .card-content {
      width: 100%;
      height: 100%;
      padding-top: 38px;
      padding-left: 38px;
    }

    > img {
      object-fit: cover;
    }
  `
}

export default obj
