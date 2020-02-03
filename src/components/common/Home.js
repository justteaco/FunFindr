import React from 'react'

class Home extends React.Component {
  state = {
    data: null,
    searchValue: '',
    searchResult: null
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('searchdata', this.state.searchValue)
    this.props.history.push('/events')
  }

  render() {
    return (
      <>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container columns">
              <form className="column is-half is-offset-one-quarter card" id="home-page" onSubmit={this.handleSubmit}>
                <input className="control is-expanded" id="search-bar" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="FIND YOUR EVENT"></input>
                <button type="submit" id="search-button">Search</button>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
 
}

export default Home