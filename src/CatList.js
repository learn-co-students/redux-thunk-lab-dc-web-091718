import React from 'react';

const CatList = props => {
    return (
        <div>
            {props.catPics.map(cat => <div><img src= {cat} alt={"cat"} /></div>)}
        </div>
    )
};

export default CatList;