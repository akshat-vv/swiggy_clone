import React from 'react';
import Slider from 'react-slick';

const Banner = ({ banner }) => {



  return (
    <>
      {
        banner.map((banner) => {
          const { imageId, action } = banner;
          const { text } = action;
          return <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`} alt="" className="h-40 mix-blend-multiply cursor-pointer hover:shadow-sm" />
        })
      }
    </>
  )
}

export default Banner