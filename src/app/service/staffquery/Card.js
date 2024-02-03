import React from 'react';

function Card({person}) {
  return(
    <div>
      <div className='grid grid-cols-6 gap-2 mx-3 py-2'>
        <div className='flex col col-span-fit justify-items-start'>
            <div>{person.abbr}</div>
        </div>
        <div className='flex col col-span-3 justify-items-start'>
            <p>{person.name}</p>
        </div>
        <div className='flex col col-span-2 justify-items-start'>
            <p>{person.dept}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;