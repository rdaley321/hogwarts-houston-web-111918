import React from 'react'
import HogCard from './HogCard'

class HogList extends React.Component {

  render () {
    let data
    let randomdiv
    if(this.props.greased){
      data = this.props.hogs.filter(hog => hog.greased === true)
    } else {
      data = this.props.hogs
    }
    switch(this.props.sortEm){
      case 'name':
        data = data.sort((a,b) => a.name.localeCompare(b.name))
      break
      case 'weight':
        data = data.sort((a,b) => b.weight - a.weight)
      break
      default:
    }

    randomdiv = data.map(data => {
      return <HogCard {...data} key={data.id} />
    })

    return (
      <div className="ui grid container" style={{marginTop: '15px'}}>
        {randomdiv}
      </div>
    )
  }
}

export default HogList;
