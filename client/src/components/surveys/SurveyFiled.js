//render a single label
import React from 'react';
                //these are props.input/label/meta
export default ({ input, label, meta: { error, touched } }) => {
    //console.log(meta);
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className='red-text' style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};
//redux form gives a butch of eventhandler function on props.input(Object)