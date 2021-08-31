import React from 'react';
import Spinner from '../spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types'

const Users = ({ users, loading}) => {
  if(loading) {
    return <Spinner/>
  } else {
      return (
            <div style={userStyle}>
                {users && users.map(user=> (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )} 
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
