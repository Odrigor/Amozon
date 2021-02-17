import React from 'react'; 
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0,rating: 4, tittle: 'HarryPotter', image: 'libro01.jpg'},
        {id:1,rating: 3, tittle: 'the shining', image: 'libro02.jpg'},
        {id:2,rating: 5, tittle: 'codigo davinci', image: 'libro03.jpg'},
        {id:3,rating: 5, tittle: 'El principito', image: 'libro04.jpg'},
        {id:4,rating: 4, tittle: 'sobrenatural', image: 'libro05.jpg'},
      ]
    };
  }


  render(){
    return (
      <div className="App">
        Hola mundo!!!
        <Menu title="Amozon :) "/>
        <List items={this.state.books}/>
      </div>
    );
  };
}
 
export default App;
