import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { useParams } from 'react-router-dom';

const List = () => {

    const [anime, setAnime] = useState([]);
    const { id } = useParams()

    const fetch = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/top/${id ? id : "anime"}`);
        setAnime(data.data.data);
    }

    useEffect(() => {
        fetch();
    }, [id])

    return (
        <div className='cards'>
            {console.log(anime)}
            {anime?.map(bleach => (
                <Card all={bleach} key={bleach.mal_id} />
            ))}
        </div>
    );
};

export default List