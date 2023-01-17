import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra <span>Decia...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter"></span>
        <span className="blankSqaure"></span>
      </div>
      <div className="lettterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
       </form>
      </div>
      <div className="wrongLettersContainer">
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game