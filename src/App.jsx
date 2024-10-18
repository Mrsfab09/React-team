import "./App.css";
import { Button } from "./components/Button";
import { ListWrapper } from "./components/ListWrapper";
import { twitterAccounts } from "./data/twitterAccounts";

function App() {
  return (
    <ListWrapper>
      {twitterAccounts.map((account, index) => (
        <li
          key={index}
          className="flex flex-col items-center gap-10 mb-14 mt-10 md:flex-row"
        >
          <img
            key={index}
            className="w-48 rounded-full md:w-72"
            src={account.image}
            alt={account.image}
          />
          <div className="mt-2 text-center md:text-left md:mt-14">
            <h2 className="text-2xl mb-4 md:text-3xl">{account.name}</h2>
            <p className="w-[350px] text-base font-light mb-8 tracking-wide leading-9 md:text-lg md:w-[800px] md:tracking-wide md:leading-9">
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
