import React from 'react';

const Search = () => {
    return (
        <div className="flex flex-col justify-start gap-4 pt-[10vh]">
            <div>
            <h4> Que cherchez-vous ? </h4>
            <input placeholder='Que cherchez-vous ?' className='py-1 px-4'/>
            </div>
        </div>
    );
};

export default Search;