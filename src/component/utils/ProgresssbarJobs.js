import React from 'react'

function ProgresssbarJobs({ progress }) {

    const Parentdiv = {
        width: '100%',
        height: "5px",
        pending:'3px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 10
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        borderRadius: 40,
        textAlign: 'right'
    }



    return (
        <div style={Parentdiv}>
            <div style={Childdiv} className="bg-progressbarjobs">
            </div>
        </div>
    )
}

export default ProgresssbarJobs