import './index.css'

const MatchCard = props => {
    const { recentMatchDetail } = props
    const { result, competingTeam, competingTeamLogo, matchStatus } = recentMatchDetail

    return (
        <li >
            <img src={competingTeamLogo} alt={competingTeam} className="" />
            <p className="">{competingTeam}</p>
            <p className="result">{result}</p>
            <p className="">{matchStatus}</p>
        </li>
    )
}
export default MatchCard
