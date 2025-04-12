import {useEffect, useState} from "react";
import axios from "axios";

function Personal() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/personal")
        .then((res) => {
            setData(res.data);
        });
    }, []);
    
    return (
        <div>
            <h2>Personal Info</h2>
            {data.map((item) => (
                <div key={item.id}>
                    <p>First Name: {item.first_name}</p>
                    <p>Last Name: {item.last_name}</p>
                    <p>Email: {item.email}</p>
                    <p>Age: {item.age}</p>
                </div>
            ))}
        </div>
    );
}

export default Personal;