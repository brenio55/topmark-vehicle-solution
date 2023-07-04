function Car({ carSrc, carName, carPrice }) {
  return (
    <div>
      <div className="carSquare">
        <div className="topSide">
          <img className="carImg" src={carSrc} alt={carName} />
        </div>
        <div className="botSide">
          <h3>{carName}</h3>
          <h4>£{carPrice}</h4>
        </div>
      </div>
    </div>
  );
}

export default Car;
