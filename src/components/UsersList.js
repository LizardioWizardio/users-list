import React from 'react';
import UsersListItem from "./UsersListItem";

const UsersList = ({users}) => {
    return (
        <ul>
            {
                users.map((user) => {
                    return <UsersListItem data={user} key={user.id}/>
                })
            }
        </ul>
    );
};

export default UsersList;