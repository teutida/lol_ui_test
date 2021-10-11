//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        viewCompleted: false,
        activeItem:{
          title:"",
          description:"",
          completed:false
        },
        todoList:[]
      };
    }
    intervalID;
    async componentDidMount(){
      this.getData();
      this.intervalID=setInterval(this.getData.bind(this),5000);
    }
componentWillUnmount(){
clearInterval(this.intervalID);

}

async getData(){
  try{
    const res=await fetch('http://localhost:8000/api/post/');
    const todoList= await res.json();
    this.setState({
      todoList
    });
  } catch(e){
    console.log(e);
  }
}



    renderItems=()=>{
      const {viewCompleted} = this.state;
      const newItems=this.state.todoList.filter(
        item=>item.completed===viewCompleted
      );
      return newItems.map(item=>(
        <li
          key={item.id}
          className="taco"
          >
            <span
            className={this.state.viewCompleted ? "completed-todo":""}
            title={item.description}
            >
              {item.title}
            </span>
          </li>
      ));
    };
    render(){
      return (
        <main className="content">
          <div className="row">
            <div className="columna1">
              <div className="card">
                <ul className="list-group">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </main>
      )
    }
  }
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
