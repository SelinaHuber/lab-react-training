import React from 'react'




function IdCard(props) {
    return (
        <div>
            <p>last name: {props.lastName}</p>
            <p>first name: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.height/100}m</p>
            <p>Date of Birth:{props.birth.toLocaleDateString()}</p>
            <img src={props.picture}/>
            <br/>
            
        </div>
    )
}


export default IdCard;