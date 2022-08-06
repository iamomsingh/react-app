import React, { Component } from 'react';
import Navbar from './component/navbar';
import './App.css';
import Counters from './component/counters';


class App extends Component {

  state = { 
    counters : [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
        {id:5, value:0},
        {id:6, value:10},
    ]
 } ;

 handleDelete = counterId => {
   const counters = this.state.counters.filter( c => c.id !== counterId);
   this.setState({counters});

 };

 handleReset = () => {
    const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({counters});
 };

 handleIncrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
 };

  render() { 
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}></Navbar>
        <main className='container'>
          <Counters
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement} 
            onDelete = {this.handleDelete} 
          />
        </main> 
      </div>
    );
  }
}
 
export default App;
