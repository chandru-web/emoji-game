import './index.css'

const WinOrLoseCard = props => {
  const {scoreDetails, playAgainBtn} = props
  const {currentScore, topScore} = scoreDetails

  const playAgain = () => {
    playAgainBtn()
  }

  const renderWinCard = () => (
    <div className="win-card">
      <div className="win-score-card">
        <h1 className="you-won">You Won</h1>
        <p className="best-score">Best Score</p>
        <h1 className="score-in-number">{currentScore}/12</h1>
        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="win-emoji-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win emoji"
          className="win-emoji"
        />
      </div>
    </div>
  )

  const renderLossCard = () => (
    <div className="lose-card">
      <div className="lose-score-card">
        <h1 className="you-lose">You Lose</h1>
        <p className="score">Score</p>
        <h1 className="score-in-number">{currentScore}/12</h1>
        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="loss-emoji-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="loss emoji"
          className="loss-emoji"
        />
      </div>
    </div>
  )

  return currentScore >= topScore ? renderWinCard() : renderLossCard()
}

export default WinOrLoseCard
