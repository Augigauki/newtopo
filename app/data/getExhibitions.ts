'use server'

import { endpoint, options } from "./tokenAndPath"

export const getExhibitions = async() => {
    const res = await fetch(`${endpoint}/exhibitions?depth=0&limit=100`, options);
    if(!res.ok){
        console.error(`Can't fetch exhibitions: ${res.status}`);
        throw new Error(`Can't fetch exhibitions: ${res.status}`)
    }
    return await res.json();
}

export const getExhibitionBasedOnSlug = async(slug: string) => {
    const res = await fetch(`${endpoint}/exhibitions?where[slug][equals]=${slug}&depth=2`, options);
    if(!res.ok){
        console.error(`Can't fetch exhibitions based on slug: ${res.status}`);
        throw new Error(`Can't fetch exhibitions based on slug: ${res.status}`)
    }
    return await res.json();
}

export const getExhibitionBasedOnId = async(id: string) => {
    const res = await fetch(`${endpoint}/exhibitions/${id}`, options);
    if(!res.ok){
        console.error(`Can't fetch exhibitions based on id: ${res.status}`);
        throw new Error(`Can't fetch exhibitions based on id: ${res.status}`)
    }
    return await res.json();
}