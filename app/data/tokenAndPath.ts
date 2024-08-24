const cmsToken = process.env.CMS_API_KEY;

export const endpoint = process.env.CMS_API;

const envSecs = parseInt(process.env.REVALIDATE || '');
const secs = Number.isInteger(envSecs) ? envSecs : 300;

export const options = {
    next: {revalidate: secs},
    headers: {
        Authorization: `apiUsers API-Key ${cmsToken}`
    }
}