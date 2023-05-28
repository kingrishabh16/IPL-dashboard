import './index.css'

const LatestMatch = props => {
    const { latestMatchList } = props

    const { umpires, result, manOfTheMatch, date, venue, competingTeam, competingTeamLogo, firstInnings, secondInnings } = latestMatchList

    return (
        <div className="">
            <div className="">
                <h1 className="">Delhi Capitals</h1>
                <p className="">{date}</p>
                <p className="">{venue}</p>
                <p className="">{result}</p>
            </div>
            <img src={competingTeamLogo} alt={`latest-match ${competingTeam}`} className="" />
            <div className="">
                <p className="">First Innings</p>
                <p className="">{firstInnings}</p>
                <p className="">Second Innings</p>
                <p className="">{secondInnings}</p>
                <p className="">Man of The Match</p>
                <p className="">{manOfTheMatch}</p>
                <p className="">Umpires</p>
                <p className="">{umpires}</p>
            </div>
        </div>
    )
}

export default LatestMatch