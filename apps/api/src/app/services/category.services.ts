import { apiUrl } from "../../environments/environment";
import { HttpRequestI } from "../interfaces";
import { ItemSearchI } from "../interfaces/item-search.iterface";

export class CategoryService{
   
    private http: HttpRequestI
    constructor(private httpRequest: HttpRequestI){
        this.http = httpRequest
    }

    getById = async(id: string) => this.http.get(`${apiUrl.categories}/${id}`);
    
    // TODO: EXTRAS
    formatCategory = async(itemsResponse: ItemSearchI) => {
        const availableFilters = itemsResponse?.available_filters
        const firstCategoryId = itemsResponse.results[0]?.category_id
        
        return  this.formatToArray(availableFilters) ?? 
                this.formatApiToArray(this.getById(firstCategoryId))
    };
    
    formatToArray = (category) => category && category.map(path => path.name) 

    formatApiToArray = async (category) => {
        const categoryResult = await category
        return categoryResult && categoryResult.path_from_root.map(path => path.name) 
    } 
    
    


}