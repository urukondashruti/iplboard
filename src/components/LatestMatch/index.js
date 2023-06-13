// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchs} = props
  const {
    competingLogo,
    competingTeam,
    date,
    firstInnings,
    id,
    manOfMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchs

  return (
    <div>
      <h1>Latest Matches</h1>
      <div className="div3">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            src={competingLogo}
            className="img5"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
