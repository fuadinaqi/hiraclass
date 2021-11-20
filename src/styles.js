import styled, { css } from 'styled-components'
import theme from 'theme'

// @media screen and (max-width: 799px) {
//   // mobile
// }
// @media screen and (min-width: 800px) {
//   // computer
// }

const obj = {
  Wrapper: styled.div`
    background-color: #f2f2f2;
    max-width: 1344px;
    height: 100vh;
    margin: 0 auto;
  `,
  Navbar: styled.nav`
    position: fixed;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media screen and (max-width: 799px) {
      // mobile
      width: calc(100% - 50px);
      max-width: 1294px;
      padding: 25px 25px;
    }
    @media screen and (min-width: 800px) {
      // computer
      width: calc(100% - 200px);
      max-width: 1144px;
      padding: 25px 100px;
    }
    ${(props) =>
      props.isMoving &&
      css`
        background-color: ${theme.primary};
      `};
  `,
  Content: styled.div`
    width: 100%;
    position: relative;
    top: 76px;
    height: calc(100vh - 76px);
    overflow-y: auto;
    overflow-x: hidden;
  `,
  First: styled.div`
    @media screen and (max-width: 799px) {
      // mobile
      padding: 25px 25px;

      > .first-2 > .computer {
        width: 300px;
        position: absolute;
        top: 0;
        right: -50px;
        opacity: 0.2;
      }
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 25px 100px;
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 20px;
    }
  `,
  Second: styled.div`
    @media screen and (max-width: 799px) {
      // mobile
      padding: 25px 25px;
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 25px 100px;
      > .second-1 {
        justify-content: center;
      }
    }
    > .button-signup {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    > .second-1 {
      width: 100%;
      display: flex;
      overflow-x: auto;

      > .card {
        width: 223px;
        min-width: 223px;
        margin-top: 50px;
        margin-right: 30px;
        :last-child {
          margin-right: 0;
        }
      }
    }
  `,
  Third: styled.div`
    @media screen and (max-width: 799px) {
      // mobile
      padding: 25px 10px;
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 25px 10px;
    }

    > .third-1 {
      margin-top: 25px;
      width: 100%;
      display: flex;
      overflow-x: auto;
      > .third-1-card {
        margin-right: 25px;

        :last-child {
          margin-right: 0;
        }
      }
    }
  `,
  Fourth: styled.div`
    @media screen and (max-width: 799px) {
      // mobile
      padding: 25px 25px;

      > .fourth-1 {
        margin-top: 50px;

        > div {
          margin-bottom: 50px;
        }
      }

      > .fourth-1 > img {
        width: 300px;
        margin: 0 auto;
        display: block;
      }
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 25px 100px;

      > .fourth-1 {
        margin-top: 50px;
        display: grid;
        grid-gap: 75px;
        grid-template-columns: 500px 500px;
      }
      > .fourth-1 > img {
        width: 500px;
      }
    }
  `,
  Fifth: styled.div`
    background-color: ${theme.primary};
    @media screen and (max-width: 799px) {
      // mobile
      padding: 50px 25px;
      height: 500px;

      img {
        margin-top: 25px;
        margin-bottom: 10px;
      }

      > .fifth-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 70px 45px;
      height: 683px;

      > .fifth-1 {
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;

        .line {
          width: 2px;
          height: 314px;
          background: #fff;
          margin: 0 45px;
        }
      }
    }
  `,
  Sixth: styled.div`
    @media screen and (max-width: 799px) {
      // mobile
      padding: 25px 25px;

      > img {
        width: 300px;
        margin-bottom: 25px;
      }
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 25px 25px;
      display: grid;
      grid-template-columns: 500px 1fr;
      gap: 64px;

      > img {
        width: 500px;
      }
    }
  `,
  Footer: styled.div`
    background-color: ${theme.primary};
    height: 300px;
    @media screen and (max-width: 799px) {
      // mobile
      padding: 30px 25px;
    }
    @media screen and (min-width: 800px) {
      // computer
      padding: 50px 45px;
    }

    > .socmed {
      display: flex;
      margin-bottom: 150px;

      > div {
        margin-right: 16px;
      }
    }
  `
}

export default obj
