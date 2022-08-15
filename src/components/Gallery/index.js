import React, { Component } from 'react';
import one from '../../assets/portfolio/one.jpg'
import two from '../../assets/portfolio/two.jpg'
import three from '../../assets/portfolio/three.jpg'

class Main extends Component {

state = {
  index: 0,
  picList:[one, two, three]
}

onClickNext= () => {
  if (this.state.index + 1 === this.state.picList.length ){
      this.setState({ 
          index: 0 
        })
    } else {
        this.setState({
            index: this.state.index + 1
        })
    }

  }
  onClickPrevious= () => {
    if (this.state.index - 1 === -1 ){
        this.setState({ 
            index: this.state.picList.length - 1
          })
      } else {
          this.setState({
              index: this.state.index - 1
          })
      }
    }

render() {
return (
  <div>
    <img id='portfolioPics' src={this.state.picList[this.state.index]} /> <br/>
    <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
    <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
  </div>
);
}

}


export default Main;