import React from 'react';


const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <p>{props.counter}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default Person;