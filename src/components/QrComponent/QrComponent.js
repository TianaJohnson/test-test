import React, { Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader'
 
class QrComponent extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
     }
  render() {
    return (
      <div>
        <QrReader
        center
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default connect()(QrComponent);