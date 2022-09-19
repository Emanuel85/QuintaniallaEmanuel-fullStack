import React from "react";
import {Link} from "react-router-dom"


export default function Landing(){
    return (
        <div>
            <h1>Bienvenidos a la tierra C-137!</h1>
            <Link to="/home">
                <button> Home</button>
            </Link>
        </div>
    )
}