
import persons from '../data'
import Card from '../Card'
import './main.css'
let lists = persons.map( (person,i) => {
  return <Card key= {i} person ={person}></Card>
})
function Main() {
    return (
      <div className="main">
        {lists}
      </div>
    );
  }
  
  export default Main;
  