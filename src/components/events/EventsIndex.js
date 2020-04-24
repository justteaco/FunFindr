import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const apiKey = process.env.API_KEY

import EventCard from './EventCard'

class EventsIndex extends React.Component {
  state = {
    searchResult: [],
    filteredEvents: []
  }

  handleChange = e => {
    const filteredEvents = this.state.searchResult.filter(event => (event.venue.town).toLowerCase().indexOf(e.target.value) > -1)
    this.setState({ filteredEvents })
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchdata')
    this.searchEvents(searchValue)
  }

  searchEvents = async (word) => {
    try {
      const { data } = await axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=${apiKey}&keyword=${word}&limit=100&order=distance&description=1`)
      this.setState({ searchResult: data.results })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <nav>
          <Link className="home-button" to="/">Home</Link>
          <div className="location-search">
            <input className="search-bar-nav" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="WHERE YOU AT"></input>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.filteredEvents.length === 0
                ?
                this.state.searchResult.map(event =>( 
                  <EventCard key={event.id} {...event}/>
                ))
                :
                this.state.filteredEvents.map(event =>( 
                  <EventCard key={event.id} {...event}/>
                ))}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default EventsIndex