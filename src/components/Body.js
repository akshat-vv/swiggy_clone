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
    setAllRestaurants(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.slice(0,18));
  }

  return (
    
    <div className='p-4 flex flex-wrap justify-between gap-3'>

      { allRestaurants.length === 0 ? <Shimmer/> :
        allRestaurants.map((restaurant)=>{
           return <RestaurantCard {...restaurant.info}/>
        })
      }
      
    </div>
  )
}

export default Body