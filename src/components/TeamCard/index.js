import { Link } from 'react-router-dom'

import './index.css'

const TeamCard = props => {
    const { teamDetail } = props
    const { id, name, teamImageUrl } = teamDetail

    return (
        <Link to={`/team-matches/${id}`} className="">
            <li className="">
                <img src={teamImageUrl} alt={`${name}`} className="" />
                <h1 className="">{name}</h1>
            </li>
        </Link>
    )
}
export default TeamCard
