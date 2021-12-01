import React, { useState, useEffect } from 'react';

const Films = () => {
    
    useEffect(() => {
        fetchFilms();
    },[]);

    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        try {
            const data = await fetch('https://ghibliapi.herokuapp.com/films');
            const films = await data.json();
            console.log(films);
            setFilms(films);
        } catch (err) {
            console.log(err)
            setFilms([])
        }
    }

    return (
        <div>
            <h1>Films</h1>
            {films.map(film => (
                <p key={film.id}>{film.title} 
                ({film.release_date}) 
                <br/> RT Score: {film.rt_score}%
                <br/> Description: {film.description}
                </p>
            ))}
        </div>
    );
  }
  
  export default Films;
  