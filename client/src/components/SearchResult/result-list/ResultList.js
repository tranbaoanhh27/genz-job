import React from 'react';

import ResultItem from './ResultItem';
import './ResultList.css';

const ResultList = (props) => {
    console.log(props.results);
    const resultItems = props.results.map((result, index) => {
        return <ResultItem 
            key={index}
            result={result}
            theme={props.theme}
            />;
    });

    return (
        <div id="conversation-list">
            {resultItems}
        </div>
    );
}

export default ResultList;