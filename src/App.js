import React, { Component } from 'react';
import web3 from './web3';
import fund from './fundpro';

class App extends Component {
  state ={
    currentUserAddress:'0x12346',
    playersCounts:1,
    players:'0x0000000000',
    totalBalances:100,
    remainDays:30,
  };

  async componentDidMount(){
    const accounts = await web3.eth.getAccounts();
    this.setState({currentUserAddress:accounts[0]});
    //const playersCounts = await fund.methods.fundings.getPlayersCount().call();
    const playersCounts = await fund.methods.getPlayersCount().call();
    this.setState({playersCounts:playersCounts});

    const totalBalances = await fund.methods.getTotalBalance().call();
    this.setState({totalBalances:totalBalances});

  };

  render() {
    return (
      <div className="App">
        <h1>当前众筹情况</h1>
        <p>当前用户地址：{this.state.currentUserAddress}</p>
        <p>当前众筹人数为：{this.state.playersCounts}</p>
        <p>当前的总余额为：{this.state.totalBalances}</p>
      </div>
    );
  }
}

export default App;
