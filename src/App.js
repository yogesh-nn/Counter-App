import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './Components/Counter';
import { FetchUserData } from './Components/FetchUserData';
import EvenOddFunc from './Components/Even-Odd_Func';
import { DogBreedFunc } from './Components/DogBreedFunc';

class App extends Component{
  render(){
    return (
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <hr></hr> */}
        {/* <Counter initialCount={0} diff={50} />
        <p></p>
        <p></p>
        <hr></hr>
        <Counter initialCount={0} diff={100} /> */}
        {/* <FetchUserData userId={1}/> */}
        {/* <EvenOddFunc /> */}
        <DogBreedFunc />
      </div>
    )
  }
}

export default App;
