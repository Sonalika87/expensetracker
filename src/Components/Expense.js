import './Expense.css'
import ExpenseDate from './ExpenseDate'
import Vcard from './Vcard';
export default function Expense(props) {
    //const expenseDate = new Date(2021,2,28);
    //const expenseTitle = 'Car Insurance';
    //const expenseAmount = 294.67;
     
  return (
    <Vcard className='expense-item'>
     <ExpenseDate date={props.date}></ExpenseDate>
     <div className='expense-item__description'>
      <h2>{props.title}</h2>
     <div className='expense-item__price'>${props.amount}</div>
     </div>
     </Vcard>
  )
}
