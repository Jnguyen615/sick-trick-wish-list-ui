import './App.css';
import React, {useState, useEffect} from 'react';
import TrickCards from '../TrickCards/TrickCards'
import Form from '../Form/Form'

function App () {
  const [tricks, setTricks] = useState([])
  
  const getTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setTricks(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation: ', error);
      });
  };

  useEffect(() => {
    getTricks()
  }, [])

  const handleFormSubmit = (newTrick) => {
    setTricks([...tricks, newTrick]);
  };

  
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form submitNewTrick={handleFormSubmit}/>
      <TrickCards tricks={tricks}/>
    </div>
  );
}

export default App; 
