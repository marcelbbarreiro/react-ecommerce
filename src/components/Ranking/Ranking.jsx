import "./Ranking.css";

function Ranking() {
  return (
    <>
      <div className="ranking__container">
        <div className="ranking__container_fighter">
          <span>#1</span>
          <span>FightClub Store</span>
          <span>Jason Statham</span>
          <span>23.567</span>
          <button>Visit Store</button>
        </div>
      </div>
      <div className="ranking__container">
        <div className="ranking__container_fighter">
          <span>#2</span>
          <span>FightClub Store</span>
          <span>Bruce Lee</span>
          <span>18.765</span>
          <button>Visit Store</button>
        </div>
      </div>
      <div className="ranking__container">
        <div className="ranking__container_fighter">
          <span>#3</span>
          <span>FightClub Store</span>
          <span>Keanu Reeves</span>
          <span>15.675</span>
          <button>Visit Store</button>
        </div>
      </div>
    </>
  );
}

export default Ranking;
