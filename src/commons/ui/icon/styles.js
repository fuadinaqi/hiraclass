import styled from 'styled-components'

const obj = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 19px;
    background-color: ${(props) => props.color};
  `
}

export default obj
