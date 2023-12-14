import React from 'react'

const RestaurantCard = (props) => {
    console.log(props);
    const {name, avgRating, cuisines, sla, cloudinaryImageId} = props;
    const {slaString} = sla;

    return (
        <div className='w-72 h-62 rounded-md flex flex-column overflow-hidden hover: cursor-pointer'>
            <div className='bg-slate-500 w-72 h-44 rounded-md overflow-clip shadow-md'>
                <img className='w-full h-full object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
        </div>
            <div className="flex flex-column flex-wrap gap-1 mt-1 p-2">
                <p className="font-extrabold text-sm">{name}</p>
                <p className='text-slate-500 text-sm'> 🌟 {avgRating} | {slaString}</p>
                <p className='text-slate-300 text-xs font-thin'>{cuisines.slice(0,3).join(", ")}</p>
            </div>
        </div>


    )
}

export default RestaurantCard