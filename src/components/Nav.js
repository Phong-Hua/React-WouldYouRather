import {NavLink} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/unanswer' activeClassName='active'>Unanswered poll</NavLink> 
                </li>
                <li>
                    <NavLink to='/answer' activeClassName='active'>Answered poll</NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>New poll</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
                </li>
            </ul>
        </nav>
    )
}