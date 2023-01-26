import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';

const UserDetails = ({info}) => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const imageRef = useRef()
    useEffect(() => {
        setLoading(true)
        axios.get(` https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then(res => {
                setDetails(res.data);
                if (imageRef.current) {
                    imageRef.current.src = res.data.avatar
                }


            })
    }, [info.id])
    return (
        <div className="flex flex-col items-center self-center border border-black">
            {details && <img
                className="rounded-full w-28 p-2"
                src={details.avatar}
                alt="avatar"
                ref={imageRef}
                style={{display: loading ? "none" : "initial"}}
                onLoad={() => setLoading(false)}
            />}

            {(loading || !details) ? <div>Loading...</div> :
                    <div>
                        <h1 className="border-t border-gray-100 text-black text-2xl py-4 pl-6 pr-3 w-full block">{details.name}</h1>
                        <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block">City: {details.details.city}</p>
                        <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block">Company: {details.details.company}</p>
                        <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block">Position: {details.details.position}</p>
                    </div>
            }
        </div>


    );
};

export default UserDetails;