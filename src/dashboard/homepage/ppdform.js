import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props);
    }  
  
    render(){
        return (
          <div className="base-container" ref = {this.props.containerRef}>
              <form> 
                  
              </form>
          </div>  
        )
          
    }
}