import './index.css'

const NavBar = props => {
  const {scoreDetails} = props
  const {currentScore, topScore, showWinOrLossCard} = scoreDetails

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {!showWinOrLossCard && (
        <div className="scores-container">
          <h1 className="heading">Score: {currentScore}</h1>
          <h1 className="heading">Top Score: {topScore}</h1>
        </div>
      )}
    </div>
  )
}

export default NavBar
