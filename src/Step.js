import React, { Component } from 'react';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      count: 0
    };
  }

incrementCount() {
    this.setState({
      count: this.state.count + +this.state.value
    });
  };
  reset(){
    this.setState({
      count: 0
    });
  };
  handleChange = (event) => {
    this.setState({
      value:event.target.value
    });
  };
  
   
  render() {
  
    return (

      <div>  
                 
          Licznik: {this.state.count}<br/>

          Krok : <input type="number" onChange={this.handleChange.bind(this)} />  

          <br/>

          <button onClick={this.incrementCount.bind(this)}>
          
          Zwiększ o:{this.state.value}</button>
          
          <button onClick={this.reset.bind(this)}>Reset</button>

      </div>
    );
  }

}


export default Step;