import Styled from './styles'
import Text from 'commons/ui/text'
import useWindowSize from 'commons/hooks/useWindowSize'
import { useMemo, useState } from 'react'
import computer from './commons/assets/computer.png'
import book from './commons/assets/book.png'
import create from './commons/assets/create.png'
import share from './commons/assets/share.png'
import play from './commons/assets/play.png'
import ready from './commons/assets/ready.png'
import riswan from './commons/assets/riswan.png'
import Button from 'commons/ui/button'
import TitleLine from 'commons/ui/titleLine'
import Icon from 'commons/ui/icon'
import theme from 'theme'
import Slider from 'commons/components/Slider'
// {mobileView ? '' : ''}
function App() {
  const [isMoving, setIsMoving] = useState(false)
  const { type } = useWindowSize()
  const mobileView = useMemo(() => type === 'mobile', [type])

  const onScrollNav = (e) => {
    if (e.target.scrollTop) {
      setIsMoving(true)
    } else {
      setIsMoving(false)
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Navbar isMoving={isMoving}>
        <Text
          size={mobileView ? '25px' : '50px'}
          weight={600}
          color={isMoving ? '#fff' : theme.black}
        >
          Hiraclass
        </Text>
      </Styled.Navbar>
      <Styled.Content onScroll={onScrollNav}>
        <Styled.First>
          <div className="first-1">
            <Text
              size={mobileView ? '33px' : '65px'}
              weight={800}
              height={mobileView ? '50px' : '100px'}
            >
              Make <br /> learning fun!
            </Text>
            <Text
              size={mobileView ? '15px' : '24px'}
              height={mobileView ? '16px' : '31px'}
              margin="20px 0 20px 0"
            >
              Any subject, in any language, on any device, for all ages!
            </Text>
            <Button padding="17px 34px">Sign up for free</Button>
          </div>
          <div className="first-2">
            <img src={computer} alt="computer" className="computer" />
          </div>
        </Styled.First>
        <Styled.Second>
          <TitleLine size={mobileView ? '22px' : '36px'}>Who is Hiraclass for?</TitleLine>
          <div className="second-1">
            <div className="card">
              <Icon src={book} />
              <Text weight={600} size={mobileView ? '18px' : '22px'} margin="30px 0 16px 0">
                At School
              </Text>
              <Text weight={500} size={mobileView ? '12px' : '16px'} height="26px">
                Engaging group and distance learning for teachers and students.
              </Text>
            </div>
            <div className="card">
              <Icon src={book} color="#FFC43B" />
              <Text weight={600} size={mobileView ? '18px' : '22px'} margin="30px 0 16px 0">
                At School
              </Text>
              <Text weight={500} size={mobileView ? '12px' : '16px'} height="26px">
                Engaging group and distance learning for teachers and students.
              </Text>
            </div>
            <div className="card">
              <Icon src={book} color="#3CC5FF" />
              <Text weight={600} size={mobileView ? '18px' : '22px'} margin="30px 0 16px 0">
                At School
              </Text>
              <Text weight={500} size={mobileView ? '12px' : '16px'} height="26px">
                Engaging group and distance learning for teachers and students.
              </Text>
            </div>
            <div className="card">
              <Icon src={book} color="#FF3B53" />
              <Text weight={600} size={mobileView ? '18px' : '22px'} margin="30px 0 16px 0">
                At School
              </Text>
              <Text weight={500} size={mobileView ? '12px' : '16px'} height="26px">
                Engaging group and distance learning for teachers and students.
              </Text>
            </div>
          </div>
          <div className="button-signup">
            <Button>SIGN UP NOW</Button>
          </div>
        </Styled.Second>
        <Styled.Third>
          <TitleLine size={mobileView ? '20px' : '36px'}>Amazing things are happening</TitleLine>
          <div className="third-1">
            <Slider mobileView={mobileView} />
          </div>
        </Styled.Third>
        <Styled.Fourth>
          <TitleLine size={mobileView ? '20px' : '36px'}>How does Hiraclass work?</TitleLine>
          <div className="fourth-1">
            <img src={create} alt="create" />
            <div>
              <Text weight={800} size={mobileView ? '20px' : '36px'} margin="0 0 9px 0">
                Create
              </Text>
              <Text
                weight={500}
                size={mobileView ? '16px' : '28px'}
                height={mobileView ? '20px' : '40px'}
              >
                It only takes minutes to create a learning game or trivia quiz on any topic, in any
                language.
              </Text>
            </div>
            {mobileView ? (
              <>
                <img src={share} alt="share" />
                <div>
                  <Text weight={800} size={mobileView ? '20px' : '36px'} margin="0 0 9px 0">
                    Share
                  </Text>
                  <Text
                    weight={500}
                    size={mobileView ? '16px' : '28px'}
                    height={mobileView ? '20px' : '40px'}
                  >
                    Host a live game with questions on a big screen or share a game with remote
                    players.
                  </Text>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Text weight={800} size={mobileView ? '20px' : '36px'} margin="0 0 9px 0">
                    Share
                  </Text>
                  <Text
                    weight={500}
                    size={mobileView ? '16px' : '28px'}
                    height={mobileView ? '20px' : '40px'}
                  >
                    Host a live game with questions on a big screen or share a game with remote
                    players.
                  </Text>
                </div>
                <img src={share} alt="share" />
              </>
            )}
            <img src={play} alt="play" />
            <div>
              <Text weight={800} size={mobileView ? '20px' : '36px'} margin="0 0 9px 0">
                Play
              </Text>
              <Text
                weight={500}
                size={mobileView ? '16px' : '28px'}
                height={mobileView ? '20px' : '40px'}
              >
                Game on! Join a kahoot with a PIN provided by the host and answer questions on your
                device.
              </Text>
            </div>
          </div>
        </Styled.Fourth>
        <Styled.Fifth>
          <TitleLine
            size={mobileView ? '20px' : '36px'}
            titleColor={theme.white}
            lineColor={theme.white}
          >
            Our best customers
          </TitleLine>
          <div className="fifth-1">
            <img src={riswan} alt="customer" />
            {mobileView ? (
              <div className="fifth-1-content">
                <Text weight={700} size="18px" margin="0 0 18px 0" color={theme.white}>
                  Riswanhadi | Sharia Economic Geek
                </Text>
                <Text weight={500} size="16px" height="20px" align="justify" color={theme.white}>
                  Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore
                  porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus
                  dignissimos repellat. Sit et aut minus quod vitae. Aut occaecati cupiditate neque
                  dolore amet beatae quasi aliquam.
                </Text>
              </div>
            ) : (
              <>
                <div className="line" />
                <div className="fifth-1-content">
                  <Text weight={700} size="18px" margin="0 0 18px 0" color={theme.white}>
                    Riswanhadi | Sharia Economic Geek
                  </Text>
                  <Text
                    weight={500}
                    size="16px"
                    height="20px"
                    width="500px"
                    align="justify"
                    color={theme.white}
                  >
                    Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore
                    porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus
                    dignissimos repellat. Sit et aut minus quod vitae. Aut occaecati cupiditate
                    neque dolore amet beatae quasi aliquam.
                  </Text>
                </div>
              </>
            )}
          </div>
        </Styled.Fifth>
        <Styled.Sixth>
          <img src={ready} alt="ready" />
          <div>
            <Text
              weight={800}
              size={mobileView ? '40px' : '64px'}
              margin="0 0 41px 0"
              height={mobileView ? '70px' : '100px'}
            >
              Ready for make learning fun!
            </Text>
            <Button padding="17px 34px">Sign up for free</Button>
          </div>
        </Styled.Sixth>
        <Styled.Footer>
          <div className="hira">
            <Text weight={600} size="36px" color="#FFFFFF" margin="0 0 80px 0">
              Hiraclass
            </Text>
          </div>
          <Text weight={700} size="12px" color="#FFFFFF" margin="0 0 12px 0">
            Follow us:
          </Text>
          <div className="socmed"></div>
          <Text weight={500} size="12px" color="#FFFFFF">
            Copyright @ 2021, Made With Pride
          </Text>
        </Styled.Footer>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default App
