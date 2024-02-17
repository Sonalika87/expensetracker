import Expense from './Expense'
function Expenses(props){
return (
    <div className='props.item'>
     <h2>Let's get started</h2>
     <Expense
     title={props.item[0].title}
     amount={props.item[0].amount}
     date={props.item[0].date}
    ></Expense>
     <Expense
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}
     ></Expense>
     <Expense 
      title={props.item[2].title}
      amount={props.item[2].amount}
      date={props.item[2].date}
     ></Expense>
     <Expense
      title={props.item[3].title}
      amount={props.item[3].amount}
      date={props.item[3].date}
     ></Expense>
    </div>
  );
}
export default Expenses