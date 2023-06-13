import {Link} from 'react-router-dom'

import './index.css'

const Items = props => {
  const {Item} = props
  const {id, name, teamImage} = Item

  return (
    <li className="list1">
      <Link to={`/team-matches/${id}`} className="list2">
        <div className="list2">
          <img src={teamImage} className="size1" alt={name} />
          <p className="para">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default Items
