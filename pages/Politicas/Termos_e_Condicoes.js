import React, { Component } from 'react';
import { cpfMask } from '../../components/cpfMask'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { documentId: '' }
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange(e) {

    this.setState({ documentId: cpfMask(e.target.value) })
  }

  render() {
    const { documentId } = this.state
    return (
      <div className="App">
        <label>CPF</label>
        <input 
          maxLength='14'
          name='documentId'
          value={documentId}
          onChange={this.handlechange}
        />
      </div>
    )
  }
}

export default App;
