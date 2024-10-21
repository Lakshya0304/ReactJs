import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} and your password is {user.password}</div>
}

export default Profile