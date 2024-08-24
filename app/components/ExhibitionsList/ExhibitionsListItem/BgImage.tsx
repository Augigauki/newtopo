'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from '../ExhibitionsList.module.css'

const BgImage = ({photos}: {photos: any[]}) => {
    const [bgImg, setBgImg] = useState<any>(photos[Math.floor(Math.random() * photos.length)])

    return(
        <Image 
            src={bgImg.url}
            alt={`${bgImg.alt ? bgImg.alt : 'Hero background image'}`}
            fill={true}
            style={{objectFit: 'cover'}}
        />
    )
};

export default BgImage;