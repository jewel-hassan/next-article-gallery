import React from 'react';
import User from '../User/User';

const Users = ({users, handleDeleteUser}) => {
    return (
        <section className='grid grid-cols-3 mt-16 gap-10 max-sm:grid-cols-1'>
            {
                users.map((user)=> <User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>)
            }
        </section>
    );
};

export default Users;