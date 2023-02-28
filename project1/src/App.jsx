import "./App.css";
import Card from "./components/cards";
import apiData from "./components/content/apiData";

const App = () => {
  return (
    <div className="App">
      <h1>My NFT Collection</h1>
      <div className="CardsWrapper">
      {apiData.map((apiData) => (
        <Card 
        url={apiData.url} 
        number={apiData.number} 
        price={apiData.price}
        />
      ))}
      </div>

    </div>
  );
};

export default App;
