
import React from 'react';
import PhotoCard from './PhotoCard';

const Featured = async () => {
    const res = await fetch("https://pixgen-sandy-beta.vercel.app/data.json")
    const photos = await res.json()
    const topGenerations = photos.slice(0, 8);
    console.log(topGenerations)

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-3xl font-bold mb-4'>Top Generations</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3'>
                {topGenerations.map(item => <PhotoCard key={item.id} item={item}></PhotoCard>)}
            </div>
        </div>
    );
};

export default Featured;