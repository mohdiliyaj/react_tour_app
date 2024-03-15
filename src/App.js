import { useState } from 'react'
import Tours from "./components/Tours";
import data from './data';


const App = () => {

  const [tours, setTours] = useState(data);

  function btnHandler(id) {
    const newTours = tours.filter(el => el.id !== id);
    setTours(newTours);
  }
  if (tours.length === 0) {
    return (
      <div className='container text-center d-flex align-items-center justify-content-center' style={{height: '100vh'}}>
        <div>
          <h2>No tours left</h2>
          <button className='btn btn-sm btn-outline-primary' onClick={() => setTours(data)}>Refresh</button>  
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} btnHandler={btnHandler}></Tours>
    </div>
  );
};

export default App;
