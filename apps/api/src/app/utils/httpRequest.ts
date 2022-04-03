import fetch from "node-fetch";

export const httpGet = async(url: string) => {
    const response = await fetch(url);
    console.log(url)
    const data = response.json();
    
    if (Object.prototype.hasOwnProperty.call(data, "error")) throw data;
    
    return data
}