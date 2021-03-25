
import persons from '../data'
import Card from '../card/Card'
import './main.css'
import {renamed as newName} from './example'

console.log(newName)
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
  