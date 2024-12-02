import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { useParams } from 'react-router-dom';
import TypeSelect from './TypeSelect';

const TypeList = () => {

    const [anime, setAnime] = useState([]);
    const { ty } = useParams();
    
    const fetch = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/top/anime?type=${ty ? ty : "anime"}`);
        setAnime(data.data.data);
    }

    useEffect(() => {
        fetch();
    }, [ty])
    
    return (
        <>
        <TypeSelect />    
        <div className='cards'>
            {console.log(anime)}
            {anime?.map(bleach => (
                <Card all={bleach} key={bleach.mal_id} />
            ))}
        </div>
        </>
    );
};

export default TypeList