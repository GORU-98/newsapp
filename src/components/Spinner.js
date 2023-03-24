import React, { Component } from 'react'
import Skateboarding from './Skateboarding.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={Skateboarding} alt="loading" />
        {/* <p>Loading... </p> */}
      </div>
    )
  }
}

export default Spinner
