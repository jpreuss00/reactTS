import React from 'react'

function User({name, age}: PersonalInfos) {
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <h3>Alter: {age}</h3>
        </div>
    )
}

export default User