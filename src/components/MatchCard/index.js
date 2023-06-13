import {Link} from 'react-router-dom'

import './index.css'

const Items = props => {
  const {Item} = props
  const {id, name, teamImage} = Item

  return (
    <li className="list1">
      <Link to={`/team-matches/${id}`} className="list2">
        <div className="list2">
          <img src={teamImage} className="size1" alt="Example response" />
          <h1 className="para">{name}</h1>
        </div>
      </Link>
    </li>
  )
}

export default Items
