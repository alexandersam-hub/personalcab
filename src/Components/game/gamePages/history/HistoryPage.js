import React from 'react';

const HistoryPage = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>{props.text}</div>
        </div>
    );
};

export default HistoryPage;