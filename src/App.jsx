import "./App.css";
import { Button } from "./components/Button";
import { twitterAccounts } from "./data/twitterAccounts";

function App() {
  return (
    <div className="w-full flex flex-col items-center text-white">
      {twitterAccounts.map((account, index) => (
        <img
          key={index}
          className="w-80 rounded-full"
          src={account.image}
          alt={account.image}
        />
      ))}
      <ul className="list-none">
        {twitterAccounts.map((account, index) => (
          <li key={index}>
            <h2 className="text-2xl">{account.name}</h2>
            <p className="text-lg font-light">{account.description}</p>
            <Button>
              <a href={account.twitterLink}>visit twitter</a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
