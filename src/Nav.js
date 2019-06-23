import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
        <li>
          <NavLink to='/home' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/newquestion' activeClassName='active'>
            NewQuestion
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}