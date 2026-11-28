import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch("https://pixgen-sandy-beta.vercel.app/data.json")
    const photos = await res.json()
    console.log(res)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
            {
                photos.map(item => <PhotoCard key={item.id} item={item}></PhotoCard>)
            }
        </div>
    );
};

export default AllPhotosPage