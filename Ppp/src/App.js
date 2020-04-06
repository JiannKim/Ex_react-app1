import React, { Component } from 'react';
import './App.css';
import Kakao_clone from './components/Kakao_clone';
import Index from './components/Index';
import Content from './components/Content';
// import Lush from './components/Lush';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:{title:'JAMONG', sub:'Ppp!!!'},
      contents:{title:'Kakao클론', desc:'오알왈왈왈'}
    }
  }
  render() {
    return (
      <div>
        <Index title={this.state.index.title} sub={this.state.index.sub} />
        <Kakao_clone />
        <Content  title={this.state.contents.title} desc={this.state.contents.desc}></Content>
        {/* <Lush /> */}
      </div>
    );
  }
}

export default App;
