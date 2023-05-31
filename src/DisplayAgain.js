import React, { Component } from 'react';
class DisplayAgain extends Component{
    constructor(props){
        super(props);
    }
 render(){
    return (
    <>
     <h1>I'm enjoying learning {this.props.Tech}</h1>
     <p>I've been doing this for {this.props.num} of months</p>
    </>
     )
   }
 }

 export default DisplayAgain;

 