import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {
    render() {
        const {name, avatar, asked, answered} = this.props;
        return (
            <div className='info'>
                <img src={avatar} alt={`Avatar of ${name}`}
                    className='avatar' 
                />
                <h3>{name}</h3>
                Question asked:
                <br/>
                <span className='bold'>{asked}</span>
                <br/>
                Question answered:
                <br/>
                <span className='bold'>{answered}</span>
            </div>
        )
    }
}

function mapStatetoProps({users}, {id}) {
    const user = users[id];

    return {
        name: user.name,
        avatar: user.avatarURL,
        asked: user.questions.length,
        answered: Object.keys(user.answers).length
    }
}

export default connect(mapStatetoProps)(User);