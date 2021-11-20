import styled, { css } from 'styled-components'

const obj = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .title {
      text-align: center;
      font-weight: 800;
      color: ${(props) => props.titleColor};
      margin-bottom: 11px;
      ${(props) =>
        props.size &&
        css`
          font-size: ${props.size};
        `};
    }

    > .line {
      width: 116px;
      height: 8px;
      background-color: ${(props) => props.lineColor};
    }
  `
}

export default obj
