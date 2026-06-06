import "./styles.css";
import Card from "./card.js";
export default function App() {
  let products = ["Laptop", "Mobile", "Keyboard"];
  let products2 = [
    {
      productName: "computer",
      price: 25000,
      description: "this is a best product",
    },
    {
      productName: "TabelFan",
      price: 5000,
      description: "this is a best product",
    },
  ];
  return (
    <div className="App">
      {products2.map((p, i) => {
        return (
          <Card
            productName={p.productName}
            price={p.price}
            des={p.description}
          />
        );
      })}
    </div>
  );
}
