import React, { Component } from 'react'
import Function from './Function'
import Class from './Class'
export class Buttons extends Component {
    constructor(){
        super()
        this.state={
            functionClick: false,
            classClick: false
        }
    }
  render() {
    return (
    
      <div>
      <button className='box' onClick={()=>this.setState({
        functionClick: !this.state.functionClick
      })}>
        To See styling in Functional Component
      </button>

<button className='box' onClick={()=>this.setState({
    classClick: !this.state.classClick
    })}>To See Styling in Class Component</button>

{this.state.functionClick?<Function/>:null}    
           {this.state.classClick?<Class/>:null}    
      </div>
        
    
    )
  }
}

export default Buttons