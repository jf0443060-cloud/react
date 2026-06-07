import "./styles.css";
import List from "./list.js";
export default function App() {
  let list = [
    {
      name: "maribel",
      userName: "@maribelk",
      date: "Oct6 01, 2002",
      montylyCc: "$3.00",
    },
    {
      name: "Rahul",
      userName: "@maribelk",
      date: "Oct6 01, 2002",
      montylyCc: "$10.00",
    },
    {
      name: "somashree",
      userName: "@maribelk",
      date: "Oct6 01, 2002",
      montylyCc: "$20.00",
    },
  ];
  return (
    <div className="App">
      {list.map((p, i) => {
        return (
          <div ClassName="users">
            <List name={p.name} date={p.date} monthly={p.montylyCc} />
          </div>
        );
      })}
    </div>
  );
}
