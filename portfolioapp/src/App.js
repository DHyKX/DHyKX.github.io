import React from "react"
// import logo from './logo.svg';
import './App.css';
// import FunctionalComp from "./components/funccomp";
// import {ClassComp1} from "./components/ClassComp";
// import Click from "./components/click";
// import Counter from "./components/counter";
// import ParentComp from "./components/ParentComp";
// import Classprops from "./CompProp/Classprop";
// import Functionprops from "./Function/Functionprops";
import NewComp from "./components/NewComp";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     <div>
//       <h1>Hello! Welcome to the Thunderdome</h1>
//       <h1>this video is about components</h1>
//       <FunctionalComp></FunctionalComp>
//       {/* <ClassComp></ClassComp> */}
//       <ClassComp1></ClassComp1>
//       <Click></Click>
//       <Counter></Counter>
//       <ParentComp></ParentComp>
//       <Classprops name="Learner 1" place="Place X"><p>Child Component</p></Classprops>
//       <Classprops name="Learner 2" place="Place Y"><button>Click</button></Classprops>
//       <Classprops name="Learner 3" place="Place Z"></Classprops>
//       <Functionprops name="Learner 4" place="Place A"></Functionprops>
//     </div>    
//   );

// }

class App extends React.Component {
  style={
    fontStyle: "bold",
    color:"teal"
  }
  render(){
    return (
      <div className="App">
        <h1 style={this.style}> Welcome </h1>
        <NewComp></NewComp>
      </div>
    )
  }
}

export default App;

