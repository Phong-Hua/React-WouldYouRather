import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
    const {authedUser} = props;
    return (
        <div className='center'>
            Hi, {authedUser}
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
                    <li>
                        <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function mapStatetoProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStatetoProps)(Nav);