import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserDetails = ({info}) => {
    const [details, setDetails] = useState(null)
    useEffect(() => {
        axios.get(` https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then(res => {
                setDetails(res.data);
            })
    }, [info.id])
    return (
        <>
            {
                details ?
                    <div>
                        <img src={details.avatar} alt="avatar" />
                        <h1>{details.name}</h1>
                        <p>City: {details.details.city}</p>
                        <p>Company: {details.details.company}</p>
                        <p>Position: {details.details.position}</p>
                    </div>
                    :
                    <div>Загрузка...</div>
            }
        </>


    );
};

export default UserDetails;