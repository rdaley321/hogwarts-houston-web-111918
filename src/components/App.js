import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'

class App extends Component {

  state = {
    hogs: [],
    showGreased: false,
    sortEm: 'name'
  }

  componentDidMount() {
    fetch('http://localhost:3001/hogs')
      .then(res => res.json())
      .then(hogs => this.setState({hogs}))
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  togglesortEm = (value) => {
    this.setState({
      sortEm: value
    })
  }

  render() {

    let button
    if(this.state.showGreased) {
      button = <button className="ui button" onClick={this.toggleGreased}>Show All The Hogs</button>
    } else {
      button = <button className="ui button" onClick={this.toggleGreased}>Show Greased Only</button>
    }

    return (
      <div className="App">
        <Nav />
        {button}
        <select className="ui dropdown" onChange={e => this.togglesortEm(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        <HogList hogs={this.state.hogs} greased={this.state.showGreased} sortEm={this.state.sortEm} />
      </div>
    )
  }
}

export default App;
