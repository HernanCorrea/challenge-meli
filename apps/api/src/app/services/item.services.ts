import { apiUrl } from "../../environments/environment";
import { httpGet } from "../utils";

export class ItemService{
    
    get = async({query = '', limit = '10', skip = 0}) => 
        httpGet(
            `${apiUrl.search}?q=${query}&limit=${limit}&skip=${skip}`
        );
   
    getById = async(id: string) => httpGet(`${apiUrl.items}/${id}`);

    getByIdDescription = async(id: string) => 
        httpGet(
            `${apiUrl.items}/${id}/description`
        );

}