import React, { PureComponent } from 'react'
import Card from 'commons/ui/card'
import Text from 'commons/ui/text'
import quran from 'commons/assets/quran.jpg'
import theme from 'theme'

const DIRECTIOM_TYPE = {
  next: 'NEXT',
  prev: 'PREV'
}

export default class Slider extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      nums: [theme.blue2, theme.blue0, '#2F281E', theme.blue2, theme.red, theme.blue0, '#2F281E'],
      current: 2,
      needTransition: true,
      direction: ''
    }
  }

  handleSliderTranslateEnd = () => {
    const { direction } = this.state
    switch (direction) {
      case DIRECTIOM_TYPE.next:
        this.vaildNextSlider()
        break
      case DIRECTIOM_TYPE.prev:
        this.vaildPrevSlider()
        break
      default:
        break
    }
  }

  vaildNextSlider = () => {
    const { current, nums } = this.state
    let _current = current
    // if (_current > nums.length - 3) {
    _current -= 1
    const _nums = [...nums, ...nums.slice(0, 1)].slice(-7)
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums
    })
    // }
  }

  vaildPrevSlider = () => {
    const { current, nums } = this.state
    let _current = current
    // if (_current < 1) {
    _current += 1
    const _nums = [...nums.slice(-1), ...nums].slice(0, 7)
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums
    })
    // }
  }

  handleNext = () => {
    const { current, nums } = this.state
    let _current = current + 1
    if (_current > nums.length - 3) return
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.next
    })
  }

  handlePrev = () => {
    const { current } = this.state
    let _current = current - 1
    if (_current < 0) return
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.prev
    })
  }

  transLateVal = () => {
    return -(this.state.current * 14.333333)
  }

  sliderStyle = () => {
    if (this.state.needTransition) {
      return {
        transform: `translateX(${this.transLateVal()}%)`,
        transition: 'transform 0.3s ease-in-out'
      }
    }

    return {
      transform: `translateX(${this.transLateVal()}%)`
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.handleNext()
    }, 3000)
  }

  render() {
    return (
      <div
        className="third-1-content"
        style={this.sliderStyle()}
        onTransitionEnd={this.handleSliderTranslateEnd}
      >
        {this.state.nums.map((item, i) => (
          <Card
            className="third-1-card"
            width={this.props.mobileView ? '380px' : '600px'}
            height={this.props.mobileView ? '200px' : '308px'}
            rightGrid={this.props.mobileView ? '120px' : '200px'}
            src={quran}
            color={item}
            alt="quran"
          >
            <Text
              weight={800}
              size={this.props.mobileView ? '20px' : '30px'}
              color="#ffffff"
              margin={this.props.mobileView ? '20px 0' : '40px 0'}
            >
              Quranic Classroom
            </Text>
            <Text
              height="24px"
              weight={400}
              size={this.props.mobileView ? '15px' : '20px'}
              width={this.props.mobileView ? '200px' : '251px'}
              color="#ffffff"
            >
              The next generation of rabbanian learning.
            </Text>
          </Card>
        ))}
      </div>
    )
  }
}
