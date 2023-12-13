import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
        <div className='position'>
        <div className='togglebox cbox'>
        <h1>This is Created using Class Component</h1>
        <p id='styling'>This is done using External CSS</p>
        <p style={{color:'blue'}}>This is done using internal CSS</p>
       </div>
       </div>
    )
  }
} 

export default Class