
import Card from '../card/Card'
import './main.css'
import { Component } from 'react';

export default class Main extends Component {
  state = {
    persons : [
      {
        name :"Alex", title : 'CEO', age:'31'
      },
      {
        name : "lachan`", title : 'Manager', age : '35'
      },
      {
        name : "Raimo", title : 'Physician', age : '32'
      }
    ]
  }
    buttonClicked =()=>{
      console.log('main')
      console.log(this.state)
      this.setState({
        persons : [
          {
            name :"Arman", title : 'CEO', age:'31'
          },
          {
            name : "Rakesh", title : 'Manager', age : '35'
          },
          {
            name : "Zaomn", title : 'Physician', age : '32'
          }
        ]
      })
    }
    
    render(){
      let lists = this.state.persons.map( (person,i) => {
        return <Card key= {i} person ={person}></Card>
      })
      return (
              <> 
                <div><button onClick = {this.buttonClicked}>From Menu</button></div>
                <div className="main">
                  {lists}
                </div>
              </>
            );
    }
  }
    
  
  