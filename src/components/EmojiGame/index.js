import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    clickedEmojisIdArray: [],
    showWinOrLossCard: false,
  }

  onAddIdToArray = id => {
    const {clickedEmojisIdArray} = this.state

    if (!clickedEmojisIdArray.includes(id)) {
      this.setState(prevState => ({
        clickedEmojisIdArray: [...prevState.clickedEmojisIdArray, id],
        currentScore: prevState.currentScore + 1,
      }))
    } else {
      this.setState({showWinOrLossCard: true})
    }
  }

  playAgainBtn = () => {
    // Reset state for a new game
    this.setState({
      currentScore: 0,
      clickedEmojisIdArray: [],
      showWinOrLossCard: false,
    })
  }

  render() {
    const {currentScore, topScore, showWinOrLossCard} = this.state
    const {emojisList} = this.props

    return (
      <div className="app-container">
        <nav>
          <NavBar scoreDetails={{currentScore, topScore, showWinOrLossCard}} />
        </nav>
        <div className="emoji-render-container">
          {showWinOrLossCard ? (
            <WinOrLossCard
              scoreDetails={{currentScore, topScore}}
              playAgainBtn={this.playAgainBtn}
            />
          ) : (
            <ul className="emojis-list-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onAddIdToArray={this.onAddIdToArray}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
