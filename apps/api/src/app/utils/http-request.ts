import fetch from "node-fetch";

export const get = async(url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    
    if (Object.prototype.hasOwnProperty.call(data, "error")) throw data;
    
    return data
}

export default { get }; 