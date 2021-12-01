import React, { useState, useEffect } from 'react';

const People = () => {

    useEffect(() => {
        fetchPeople();
    },[]);

    const [people, setPeople] = useState([]);

    const fetchPeople = async () => {
        try {
            const data = await fetch('https://ghibliapi.herokuapp.com/people');
            const people = await data.json();
            console.log(people);
            setPeople(people);
        } catch (err) {
            console.log(err)
            setPeople([])
        } 
    }

    return (
        <div>
            <h1>People</h1>
            {people.map(people => (
                <p key={people.id}>{people.name} {' '}
                <br/> Gender: {people.gender}
                <br/> Age: {people.age}
                <br/> Eye Color: {people.eye_color}
                <br/> Hair Color: {people.hair_color}
                </p>
            ))}
        </div>
    );
  }
  
  export default People;
