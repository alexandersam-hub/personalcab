import React from 'react';

const StartPages = (props) => {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <div>
                {props.text}
            </div>
        </div>

    );
};

export default StartPages;