import React from 'react'
import Img from './ImgPropsList';

import Imgage from './img/img1.jpg';
import Imgage2 from './img/img2.jpg';
import Imgage3 from './img/img3.jpg';
import Imgage4 from './img/img4.jpg';

const ImageList = () => {

    let urls = [
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
        "https://wallup.net/wp-content/uploads/2016/01/288160-space-universe-stars-Milky_Way.jpg",
        "https://wallup.net/wp-content/uploads/2017/03/29/487017-sky-Milky_Way-748x499.jpg",
        "https://cdn.wallpapersafari.com/61/9/MI1hTs.jpg",
        Imgage,
        Imgage2,
        Imgage3,
        Imgage4
      ];

      const myarray2=[
        "home",
        "aboutus",
        "service",
        "contact",
    ]

  return (
    <div>
        {urls.map(
            (items,index)=>
            <Img key={index} src={items} />
            
        )}

        {
        myarray2.map((imgtitle)=>
            <Img arr={imgtitle} />
        )
       }

    </div>
  )
}

export default ImageList