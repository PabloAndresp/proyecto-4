

function MenuItem({ image, nombre, precio }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {nombre} </h1>
      <p> ${precio} </p>
    </div>
  );
}

export default MenuItem;
