import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../actions'

import './styles/List.css'

class List extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  getDetails = id => {
    this.props.fetchDetail(id)
  }

  render() {
    return (
      <div>
        {' '}
        <div className="music-events">Music Events in Los Angeles</div>
        <div className="root-container">
          {this.props.MusicEvents.map(event => (
            <div className="container-list" key={event.id}>
              <div className="date">
                {formatDate(event.dates.start.localDate)},{' '}
                {formatTime(event.dates.start.localTime)}
              </div>
              <div className="title">{event.name}</div>

              <div className="mid-container">
                <div className="left-mid-container">
                  {' '}
                  <div>{event._embedded.venues[0].name}</div>
                  <div>
                    {event._embedded.venues[0].city.name},{' '}
                    {event._embedded.venues[0].state.name}
                  </div>
                  {/* <div className="prices">{`$${Math.round(
                    event.priceRanges[0].min
                  )} - $${Math.round(event.priceRanges[0].max)}`}</div> */}
                  {/* {event.priceRanges[0]} */}
                </div>

                <img
                  className="thumbnail-image"
                  src={event.images[0].url}
                  alt=""
                />
              </div>
              <div className="container-link">
                <div className="genre">
                  Genre:{event.classifications[0].genre.name}
                </div>
                <Link
                  className="link"
                  to="/detail"
                  onClick={this.getDetails.bind(this, event.id)}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

// Add proptypes

function formatDate(date) {
  var mydate = new Date(date)

  return mydate.toDateString()
}

function formatTime(time) {
  var date = new Date(`February 04, 2011 ${time}`)

  return (
    date.toLocaleString().slice(9, 14) + date.toLocaleString().substring(17)
  )
}

function mapStateToProps({ MusicEvents }) {
  return { MusicEvents }
}

export default connect(mapStateToProps, actions)(List)
