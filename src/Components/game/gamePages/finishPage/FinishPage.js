import React from 'react';

const FinishPage = (props) => {
    return (
        <div>
            <div>
                <h2>
                    {props.title}
                </h2>
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default FinishPage;