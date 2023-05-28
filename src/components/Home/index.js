import { Component } from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
    state = { teamList: [] }

    componentDidMount() {
        this.getTeamData()
    }

    getTeamData = async () => {
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()

        const formatedData = data.map(eachData => ({
            id: eachData.team.id,
            name: eachData.team.name,
            teamImageUrl: eachData.team.team_image_url,
        }))
        this.setState({ teamList: formatedData })
    }

    render() {
        const { teamList } = this.state

        return (
            <div className="">
                <div className="">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                        alt="ipl logo"
                        className=""
                    />
                    <h1 className="">IPL Dashboard</h1>
                </div>
                <ul className="">
                    {teamList.map(eachItem => (
                        <TeamCard id={eachItem.id} teamDetail={eachItem} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home
