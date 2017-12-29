import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PulseLoader } from 'react-spinners'

import * as actions from '../../actions'

import './styles/ListDetail.css'

class Detail extends Component {
  renderDetails = () => {
    const { EventDetail } = this.props
    return (
      <div>
        <div className="top-detail">
          <div className="left-top-detail">
            {<img className="event-image" src={EventDetail.images[0].url} />}
          </div>
          <div>
            <div className="right-top-detail">
              <div className="date-time">
                {formatDate(EventDetail.dates.start.dateTime)}
              </div>
              <div>
                {' '}
                <div className="top-detail-attractions">
                  {EventDetail._embedded.attractions[0].name}
                </div>
                <div className="top-detail-title">{EventDetail.name}</div>
              </div>

              <div className="prices">
                ${EventDetail.priceRanges[0].min}-{' '}
                {EventDetail.priceRanges[0].max}
              </div>
            </div>
          </div>
        </div>

        <div className="purchase-section">
          <a className="purchase-ticket" href={EventDetail.url} target="_blank">
            Purchase Ticket
          </a>
        </div>

        <div className="middle-detail">
          <div className="left-middle-detail">
            <h2>Details</h2>
            <div className="middle-detail-info">{EventDetail.info}</div>
            <div>{EventDetail.pleaseNote}</div>
            <div>
              <h3>Box Office</h3>
              <p>
                {EventDetail._embedded.venues[0].boxOfficeInfo.openHoursDetail}
              </p>
              <h3>Will Call</h3>
              {EventDetail._embedded.venues[0].boxOfficeInfo.willCallDetail}

              <h3>Parking</h3>
              <p>{EventDetail._embedded.venues[0].parkingDetail}</p>
            </div>
          </div>
          <div className="right-middle-detail">
            <h3>Location</h3>
            <div>{EventDetail._embedded.venues[0].name}</div>
            <div>{EventDetail._embedded.venues[0].address.line1}</div>
            <div> {EventDetail._embedded.venues[0].city.name}</div>
            <div> {EventDetail._embedded.venues[0].state.name}</div>
            <h3>Venue</h3>
            <img
              className="venue-image"
              src={EventDetail._embedded.venues[0].images[0].url}
              alt=""
            />
          </div>
        </div>

        <div className="seating-information">
          <div>
            <h2>Seating information</h2>
          </div>
          <div>{<img src={EventDetail.seatmap.staticUrl} />}</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container-list-detail">
        {this.props.EventDetail.images ? (
          this.renderDetails()
        ) : (
          <div className="pulse-background">
            <PulseLoader color={'royalBlue'} />
          </div>
        )}
      </div>
    )
  }
}

function formatDate(date) {
  var mydate = new Date(date)

  return mydate.toDateString()
}

function mapStateToProps({ EventDetail, isFetching }) {
  return { EventDetail, isFetching }
}

export default connect(mapStateToProps, actions)(Detail)
