'use client'

import { useState } from 'react';
import styles from './component.module.css'
import Image from 'next/image';

const FrontpageImage = ({photos, path}: {photos: any[]; path: string}) => {
    const [heroImg, setHeroImg] = useState<any>(photos[Math.floor(Math.random() * photos.length)])
    return(
        <Image 
            src={heroImg.url}
            alt={`${heroImg.alt ? heroImg.alt : 'Hero background image'}`}
            fill={true}
            style={{objectFit: 'cover'}}
        />
    )
};

export default FrontpageImage;