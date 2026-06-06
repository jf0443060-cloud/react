import "./styles.css";

function Card(props) {
  return (
    <div className="card">
      <h1> {props.productName}</h1>
      <p> This ia a great smart phone</p>
      <div> price: $ {props.price} </div>
      <div> Add to Card</div>
    </div>
  );
}

export default Card;
