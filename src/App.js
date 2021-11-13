import './App.css';
import MainPart from './Components/MainPart.js';

import Cookies from 'universal-cookie/es6';


function App() {

  const cookies = new Cookies();

  const initstate = {
    costs: {
        '1': 20,
        '2': 100,
        '3': 200,
        '4': 500,
        '5': 1000
    },
    addict: {
        '1': 1,
        '2': 5,
        '3': 10,
        '4': 25,
        '5': 50
    },
    have: {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0
    }
};
  if (!cookies.get('sugar')) {
    cookies.set('sugar', 0)
    cookies.set('cps', 0)
    cookies.set('upd', initstate)

  }
  


  return (
    <div className="App">
      <MainPart />
      
    </div>
  );
}

export default App;
