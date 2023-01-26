import React, {useContext} from 'react';
import {AppContext} from "../App";

const UsersListItem = ({data}) => {
    const {setActiveUser} = useContext(AppContext)
    return (
        <div
            onClick={() => setActiveUser(data)}
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            {data.name}
        </div>


    );
};

export default UsersListItem;