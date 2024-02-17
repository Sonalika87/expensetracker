import './Card.css';
function Vcard(props){
  const classes='card'+ props.className;
  return <div className="classes">{props.children}</div>  
}
export default Vcard;