import React from 'react';
import work_history from '../assets/history.json';

function History() {
    return (
        <div className="white container-fluid">
            <h1>Work History</h1>
            <div className="container">
                {work_history.map(data => (
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>{data.company}</h4>
                            <h5>{data.location}</h5>
                            <h5>{data.dates}</h5>
                            <h5>Supervisor: {data.supervisor}</h5>
                            <p>{data.phone}</p>
                            <p>{data.address}</p>
                        </div>
                        <div className="col m6 s12">
                            <h4>{data.title}</h4>
                            <ul>
                                {data.duties.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History;