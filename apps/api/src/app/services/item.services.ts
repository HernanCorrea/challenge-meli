import { apiUrl } from "../../environments/environment";
import { HttpRequestI } from "../interfaces";

export class ItemService{
    private http: HttpRequestI
    constructor(private httpRequest: HttpRequestI){
        this.http = httpRequest
    }

    get = async({query = '', limit = 4, skip = 0}) => 
        this.http.get(
            `${apiUrl.search}?q=${query}&limit=${limit}&skip=${skip}`
        );
   
    getById = async(id: string) => this.http.get(`${apiUrl.items}/${id}`);

    getByIdDescription = async(id: string) => 
        this.http.get(
            `${apiUrl.items}/${id}/description`
        );

}