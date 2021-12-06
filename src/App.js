import logo from "./logo.svg";
import "./App.sass";

function App() {
  return (
    <div className='App'>
      <h1 className='App-header'>Under Construction</h1>
      <div className='GiphyContainer'>
        <iframe
          src='https://giphy.com/embed/xZsLh7B3KMMyUptD9D'
          width='100%'
          height='100%'
          style={{ position: "absolute" }}
          frameBorder='0'
          class='giphy-embed'
          allowFullScreen
        ></iframe>
      </div>
      <p className='giphyCredit'>
        <a href='https://giphy.com/gifs/tlceurope-xZsLh7B3KMMyUptD9D'>
          via GIPHY
        </a>
      </p>
    </div>
  );
}

export default App;
