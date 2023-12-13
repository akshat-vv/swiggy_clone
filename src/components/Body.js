import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(()=>{
    console.log("USE EFFECT");
    getRestaurants('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  },[]);

  const  getRestaurants = async (API_URL) => {
    let response =  await fetch(API_URL);
    let data = await response.json();
    setAllRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.slice(0, 18));
    setBanner(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info.slice(0, 8));
  }

  return (
    <div className='flex flex-col p-4'>
      {banner.length > 0 &&
        < div className=' mb-4 rounded-m flex justify-around' >
          <Banner banner={banner} />
        </div>
      }
      <div className='flex flex-wrap justify-between gap-3'>

        {allRestaurants?.length === 0 ? <Shimmer /> :
          allRestaurants?.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} />
          })
        }

      </div>
    </div>

  )
}

export default Body