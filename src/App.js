import "./App.sass";
import NavBar from "./Components/NavBar";
import SelectionScreen from "./Components/SelectionScreen";
function App() {
  return (
    //Main Page
    <div className='App'>
      <NavBar />
      <section className='startMedia'>
        <div className='landingPageHeaderContainer'>
          <h1 className='saisoDecoFont'>Saiso</h1>
          <a href='/#'>
            <button className='landingButton'>Join Today</button>
          </a>
        </div>
      </section>
      <SelectionScreen />
    </div>
  );
}

export default App;
