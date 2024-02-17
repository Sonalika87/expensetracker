import React from 'react';
import Expenses from './Components/Expenses';

function App() {
  const expenses = [
    { id:'e1',title:'car Insurance',amount: 294.67,date: new Date(2021,2,28)},
    { id:'e2',title:'new desk',amount: 294.67,date: new Date(2021,2,12)},
    {id:'e3',title:'cosmetic',amount: 294.67,date: new Date(2021,4,9)},
    {id:'e4',title:'electronic',amount: 294.67,date: new Date(2021,5,26)}
  ];
  return React.createElement('div',{},React.createElement('h2',{}, 'Lets get started'),)
   React.createElement(Expenses,{items:expenses})
 /* return(
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
 */
}

export default App;
