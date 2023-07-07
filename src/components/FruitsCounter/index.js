import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(each => ({mango: each.mango + 1}))
  }

  onBanana = () => {
    this.setState(each => ({banana: each.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="nos">{mango}</span> mangoes{' '}
            <span className="nos">{banana}</span> bananas
          </h1>
          <div className="fruits-con">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruits-images"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>

            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruits-images"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
