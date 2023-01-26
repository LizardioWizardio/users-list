import React from 'react';
import UsersListItem from "./UsersListItem";

const UsersList = ({users}) => {
    return (
        <div className="flex flex-col self-start border border-black">
            {
                users.map((user) => {
                    return <UsersListItem data={user} key={user.id}/>
                })
            }
        </div>
    );
};

export default UsersList;