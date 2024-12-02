import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RCard from './RCard';

const UpcomingList = () => {

    const [anime, setAnime] = useState([]);

    const fetch = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
        setAnime(data.data.data);
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <div className='cards'>
            {console.log(anime)}
            {anime?.map(bleach => (
                <RCard all={bleach} />
            ))}
        </div>
    );
};

export default UpcomingList