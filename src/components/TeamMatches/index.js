import { Component } from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
    state = { teamUrl: "", latestMatchList: [], recentMatches: [], isLoading: true }

    componentDidMount() {
        this.getMatchList()
    }

    getMatchList = async () => {
        const { match } = this.props
        const { params } = match
        const { id } = params
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()
        console.log(data)
        const filterLatestMatch = data.map(eachMatch => ({
            umpires: eachMatch.latest_match_details.umpires,
            result: eachMatch.latest_match_details.result,
            manOfTheMatch: eachMatch.latest_match_details.man_of_the_match,
            id: eachMatch.latest_match_details.id,
            date: eachMatch.latest_match_details.date,
            venue: eachMatch.latest_match_details.venue,
            competingTeam: eachMatch.latest_match_details.competing_team,
            competingTeamLogo: eachMatch.latest_match_details.competing_team_logo,
            firstInnings: eachMatch.latest_match_details.first_innings,
            secondInnings: eachMatch.latest_match_details.second_innings,
            matchStatus: eachMatch.latest_match_details.match_status
        }))
        const filterRecentMatch = data.map(eachMatch => ({
            umpires: eachMatch.recent_matches.umpires,
            result: eachMatch.recent_matches.result,
            manOfTheMatch: eachMatch.recent_matches.man_of_the_match,
            id: eachMatch.recent_matches.id,
            date: eachMatch.recent_matches.date,
            venue: eachMatch.recent_matches.venue,
            competingTeam: eachMatch.recent_matches.competing_team,
            competingTeamLogo: eachMatch.recent_matches.competing_team_logo,
            firstInnings: eachMatch.recent_matches.first_innings,
            secondInnings: eachMatch.recent_matches.second_innings,
            matchStatus: eachMatch.recent_matches.match_status
        }))
        this.setState({ teamUrl: data.team_banner_url, latestMatchList: filterLatestMatch, recentMatches: filterRecentMatch, isLoading: false })
    }

    render() {
        const { teamUrl, latestMatchList, recentMatches, isLoading } = this.state

        return (
            <div>
                {isLoading ? <Loader type="Oval" color="#ffffff" height={50} width={50} />
                    : <img src={teamUrl} alt="team banner" />
                }
                <LatestMatch key={latestMatchList.id} latestMatchList={latestMatchList} />
                <ul >
                    {recentMatches.map(eachMatch => (
                        <MatchCard id={eachMatch.id} recentMatchDetail={eachMatch} />
                    ))}
                </ul>
            </div>
        )
    }
}
export default TeamMatches
