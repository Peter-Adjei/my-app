import React from 'react';

// var name ="Peter";
// var profession ="Software Engineer";
// var company ="Google";

const Display = (props) => {
    return (
    <>
      <h1>Hello, welcome {props.name}</h1>
      <p>I am a {props.profession} at {props.company}</p>
    </>
    )
}
export default Display;