import React from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
const apiKey = process.env.API_KEY
import { Link } from 'react-router-dom'

class EventShow extends React.Component {
  state = {
    searchResult: null
  }

  componentDidMount() {
    const eventId = this.props.match.params.id
    this.searchEvents(eventId)
  }

  searchEvents = async (eId) => {
    try {
      const { data } = await axios.get(`https://www.skiddle.com/api/v1/events/${eId}/?api_key=${apiKey}`)
      this.setState({ searchResult: data.results })
      console.log(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.searchResult) return null
    const { searchResult } = this.state
    console.log(searchResult.venue.latitude)
    return (
      <>
        <nav>
          <Link className="home-button" to="/">Home</Link>
          <Link className="home-button" to="/events">Back</Link>
        </nav>
        <div className="outer-container">
          <div className="inner-container">
            <div className="top-info">
              <div className="top-left">
                <h1 id="event-name">{searchResult.eventname}</h1>
                <br />
                <h2>📍  {searchResult.venue.name}</h2>
                <h2>📅  {searchResult.date}</h2>
                <h2>🕒  From {searchResult.openingtimes.doorsopen} til {searchResult.openingtimes.doorsclose}</h2>
              </div>
              <div className="img">
                <img src={searchResult.largeimageurl} alt={searchResult.name}/>
              </div>
            </div>
            <br />
            <hr />
            <div className="additional-info">
              <hr />
              <div className="middle-left">
                <div className="description">
                  <h2>{searchResult.description}</h2>
                  <br />
                </div>
              </div>
              <div className="middle-right">
                <h2>{searchResult.venue.address}</h2>
                <h2>{searchResult.venue.town}</h2>
                <h2>{searchResult.venue.postcode}</h2>
                <h2>{searchResult.venue.city}</h2>
              </div>
            </div>
            <div className="map">
              <MapGL
                mapboxApiAccessToken={mapboxToken}
                height={'300px'}
                width={'600px'}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                zoom={10}
                latitude={searchResult.venue.latitude * 1}
                longitude={searchResult.venue.longitude * 1}
              >
                {searchResult.venue.latitude &&
                <Marker
                  latitude={searchResult.venue.latitude * 1}
                  longitude={searchResult.venue.longitude * 1}
                >
                  <div className="marker"></div>
                </Marker>
                }
              </MapGL>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EventShow