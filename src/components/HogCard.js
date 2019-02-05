import React from 'react'

class HogCard extends React.Component {

  state = {
    show: 'block',
    details: false
  }

  toggleDetails = () => {
    this.setState({
      details: !this.state.details
    })
  }

  toggleShow = () => {
    this.setState({
      show: 'none'
    })
  }

  render () {
      let details
      if(this.state.details) {
        details = [<p>Specialty: {this.props.specialty}</p>,<p>Weight: {this.props.weight}</p>,<p>HMA: {this.props['highest medal achieved']}</p>]
      }

      return (
        <div style={{display: `${this.state.show}`}} className="ui four wide column" onClick={this.toggleDetails}>
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt='hog'/>
          {details}
          <button onClick={this.toggleShow} className='ui button'>Hide This Hog</button>
        </div>
      )
  }
}

export default HogCard;
