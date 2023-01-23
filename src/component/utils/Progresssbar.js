import React from 'react'

function Progresssbar({ progress }) {

    const Parentdiv = {
        width: '100%',
        height: "15px",
        pending:'6px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 0
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        borderRadius: 40,
        textAlign: 'right'
    }



    return (
        <div style={Parentdiv}>
            <div style={Childdiv} className="bg-progressbar">
            </div>
        </div>
    )
}

export default Progresssbar