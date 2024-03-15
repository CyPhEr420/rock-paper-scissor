import './header.styles.css'
// eslint-disable-next-line react/prop-types
const Header = ({score}) => {
  return (
    <div className="header" >
            <div className="game-name">
                <h1>Rock</h1>
                <h1>Paper</h1>
                <h1>Sicssors</h1>
            </div>
            <div className="score-board">
                <p className="title">Score</p>
                <h1 className="score">{score}</h1>
            </div>
    </div>
  )
}

export default Header