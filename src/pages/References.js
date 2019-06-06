import React from 'react';
import references from '../assets/references.json';

function References() {
    return (
        <div className="container-fluid">
            <h1>References</h1>
            <hr />
            <h2>Professional</h2>
            <div className="container">
             {/* eslint-disable-next-line */}
                {references.map(function(data) {
                    if (data.type === 'professional') {
                        return (
                            <div className="row">
                                <div className="col m6 s12">
                                    <h4>{data.name}</h4>
                                    <h5>{data.title}</h5>
                                </div>
                                <div className="col m6 s12">
                                    <h5>{data.company}</h5>
                                    <p>{data.email}</p>
                                    <p>{data.phone}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <h2>Academic</h2>
            <div className="container">
             {/* eslint-disable-next-line */}
                {references.map(function(data) {  
                    if (data.type === 'academic') {
                        return (
                            <div className="row">
                                <div className="col m6 s12">
                                    <h4>{data.name}</h4>
                                    <h5>{data.title}</h5>
                                </div>
                                <div className="col m6 s12">
                                    <h5>{data.company}</h5>
                                    <p>{data.email}</p>
                                    <p>{data.phone}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default References;