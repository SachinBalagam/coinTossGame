// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    ActiveImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossUpdate = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        ActiveImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        ActiveImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, ActiveImage} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={ActiveImage} alt="toss result" className="toss-image" />
          <button type="button" className="button" onClick={this.onTossUpdate}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {headsCount + tailsCount}</p>
            <p className="score heads">Heads:{headsCount}</p>
            <p className="score tails">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
