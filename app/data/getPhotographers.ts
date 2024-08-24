'use server'

import { endpoint, options } from "./tokenAndPath"

export const getPhotographers = async() => {
    const res = await fetch(`${endpoint}/photographers`, options);
    if(!res.ok){
        const msg = `Photographers fetch not working. ${res.status}`
        console.error(msg);
        throw new Error(msg);
    }
    return await res.json();
}

export const getPhotographerBasedOnSlug = async(slug: string) => {
    const res = await fetch(`${endpoint}/photographers?where[slug][equals]=${slug}`, options);
    if(!res.ok){
        const msg = `Photographer fetch not working. ${res.status}`
        console.error(msg);
        throw new Error(msg);
    }
    return await res.json();
}