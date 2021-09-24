import React from 'react';
import { DatePicker } from 'antd';
import './App.scss';



function App() {
  const test = (date, dateString) => {
    console.log(date, dateString);
  }
  return (
    <div className="App">
      <h1>Web personal - Client <span>David Gerardo</span></h1>
      <h2>Proyecto</h2>
      <DatePicker onChange={test}/>

    </div>
  );
}

export default App;
