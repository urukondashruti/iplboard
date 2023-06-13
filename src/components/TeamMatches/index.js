// Write your code here
import './index.css'

const Team = props => {
  const {Item} = props
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
  } = Item

  const val = matchStatus === 'Won' ? 'con10' : 'con9'

  return (
    <li className="con8">
      <img
        src={competingLogo}
        className="size4"
        alt={`competing team ${competingTeam}"`}
      />
      <div className="head">
        <p>{competingTeam}</p>
      </div>
      <div className="head">
        <p>{result}</p>
      </div>
      <p className={`${val}`}>{matchStatus}</p>
    </li>
  )
}

export default Team
