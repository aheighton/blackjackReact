import './App.css';
import ResultMessage from './ReactComponents/ResultMessage';
import GameTable from './ReactComponents/GameTable';
import ActionButtons from './ReactComponents/ActionButtons';
import NameInput from './ReactComponents/NameInput';
import Title from './ReactComponents/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>

        <NameInput/>

        <GameTable/>

        <ActionButtons/>

        <ResultMessage/>

      </header>
    </div>
  );
}

export default App;

