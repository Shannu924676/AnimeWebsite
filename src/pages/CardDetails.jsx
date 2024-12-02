import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardDetails = () => {

    const [anime, setAnime] = useState([]);
    const { id } = useParams();

    const fetch = async () => {
        const data = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}&limit=1`)
        setAnime(data.data.data);
    }

    useEffect(() => {
        fetch();
    }, [id])

    return (
        <div className='des'>
            {anime?.map(all => (
                // {console.log(all.title)}
                // {console.log(all.synopsis)}
                <div key={all.mal_id}>
                    <div>
                        <img src={all.images.jpg.large_image_url} alt=''></img>
                    </div>
                    <h1>{all.title}</h1>
                    <p>{all.synopsis}</p>
                </div>
            ))};
        </div>
    )
}

export default CardDetails