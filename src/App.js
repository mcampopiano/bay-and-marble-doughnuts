
import { Home } from './Home';

function App() {

  const user = {id: 1, name: "Mario"}
  return (
    <div className="App">
      <Home user={user}/>
    </div>
  );
}

export default App;
