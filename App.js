import "./styles.css";
import Card from "./card.js";
export default function App() {
  return (
    <div className="App">
      <Card productName="pp1" price="10000" />
      <Card productName="pp2" price="15000" />
    </div>
  );
}
