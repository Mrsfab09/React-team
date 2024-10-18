import "./App.css";
import { Button } from "./components/Button";
import { ListWrapper } from "./components/ListWrapper";
import { twitterAccounts } from "./data/twitterAccounts";

function App() {
  return (
    <ListWrapper>
      {twitterAccounts.map((account, index) => (
        <li key={index} className="flex flex-row gap-10 mb-14 mt-10">
          <img
            key={index}
            className="w-72 rounded-full"
            src={account.image}
            alt={account.image}
          />
          <div className="mt-14">
            <h2 className="text-3xl mb-4">{account.name}</h2>
            <p className="w-[800px] text-lg font-light mb-8 tracking-wide leading-9">
              {account.description}
            </p>
            <Button>
              <a href={account.twitterLink}>visit twitter</a>
            </Button>
          </div>
        </li>
      ))}
    </ListWrapper>
  );
}

export default App;
