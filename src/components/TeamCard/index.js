import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class MatchDetails extends Component {
  state = {
    Object1: {},
  }

  componentDidMount() {
    this.getDetails()
  }

  getObject = data => ({
    competingTeam: data.competing_team,
    competingLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.match_status,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formated = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getObject(data.latest_match_details),
      recentMatches: data.recent_matches.map(each => this.getObject(each)),
    }
    this.setState({Object1: formated})
  }

  render() {
    const {Object1} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = Object1
    return (
      <div>
        <h1>nkngrb</h1>
        <LatestMatch latestMatchs={latestMatch} />
      </div>
    )
  }
}

export default MatchDetails
