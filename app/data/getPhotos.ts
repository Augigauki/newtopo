'use server';

import { endpoint, options } from './tokenAndPath';

export const getPhotos = async () => {
	const res = await fetch(`${endpoint}/photographs`, options);
	if (!res.ok) {
		console.error(`photos fetch no work: ${res.status}`);
		throw new Error(`photos fetch no work: ${res.status}`);
	}
	return await res.json();
};

export const getPhoto = async (id: string) => {
	const res = await fetch(`${endpoint}/photographs?where[id][equals]=${id}`, options);
	if (!res.ok) {
		console.error(`photo fetch based on id no work: ${res.status}`);
		throw new Error(`photo fetch based on id no work: ${res.status}`);
	}
	return await res.json();
};

export const getHeroPhotos = async () => {
	const res = await fetch(`${endpoint}/photographs?where[hero][equals]=true&depth=1&limit=10`, options);
	if (!res.ok) {
		console.error(`can't fetch hero photos`);
		throw new Error(`can't fetch hero images: ${res.status}`);
	}
	return await res.json();
};

export const getPhotosForPhotographer = async (id: string) => {
	const res = await fetch(`${endpoint}/photographs?where[photographer][equals]=${id}`, options);
	if (!res.ok) {
		console.error(`photo fetch for photographer no work: ${res.status}`);
		throw new Error(`photo fetch for photographer no work: ${res.status}`);
	}
	return await res.json();
};

export const getPhotosForExhibition = async (id: string) => {
	
	const res = await fetch(`${endpoint}/photographs?where[exhibition][equals]=${id}`, options);
	if (!res.ok) {
		console.error(`photo fetch for exhibition no work: ${res.status}`);
		throw new Error(`photo fetch for exhibition no work: ${res.status}`);
	}
	return await res.json();
};
