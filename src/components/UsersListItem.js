import React, {useContext} from 'react';
import {AppContext} from "../App";

const UsersListItem = ({data}) => {
    const {setActiveUser} = useContext(AppContext)
    return (
        <li onClick={() => setActiveUser(data)}>{data.name}</li>
    );
};

export default UsersListItem;