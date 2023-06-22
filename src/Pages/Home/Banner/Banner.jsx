import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../../public/New folder/New Project.jpg';
import img2 from '../../../../public/New folder/wallpaperflare.com_wallpaper (4).jpg';
import img3 from '../../../../public/New folder/wallpaperflare.com_wallpaper (5).jpg';
import img4 from '../../../../public/New folder/wallpaperflare.com_wallpaper (6).jpg';
import img5 from '../../../../public/New folder/wallpaperflare.com_wallpaper (7).jpg';

const Banner = () => {
  return (
    <div className="">
      <Carousel className=" carousel">
        <div className="">
          
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
          </div>
        <div>
          <img src={img3} />
        </div>
        <div>
        <img src={img5} />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
