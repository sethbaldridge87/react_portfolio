import React from 'react';
import education from '../assets/education.json';

function Education() {
    return (
        <div className="white container-fluid">
            <h1>Education</h1>
            <hr />
            <div className="container">
                {education.map(data => (
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>{data.name}</h4>
                            <h5>{data.location}</h5>
                            <h5>{data.degree}, {data.major}</h5>
                            <h5>{data.years}</h5>
                        </div>
                        <div className="col m6 s12">
                            <h5>GPA: {data.GPA}</h5>
                            <ul>
                                {data.highlights.map(item => (
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

export default Education;