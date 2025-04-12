import {useEffect, useState} from "react";
import axios from "axios";

function Hobbies() {
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/hobbies")
        .then((res) => {
            setHobbies(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Hobbies</h2>
            {hobbies.map((hobby) => (
                <div key={hobby.id}>
                    <p>Name: {hobby.name}</p>
                    <p>Desciption: {hobby.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Hobbies;