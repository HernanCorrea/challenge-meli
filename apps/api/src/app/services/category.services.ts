import { apiUrl } from "../../environments/environment";
import { ItemSearchI } from "../interfaces";
import {httpGet} from "../utils/httpRequest"

export class CategoryService{
   
    getById = async(id: string) => httpGet(`${apiUrl.categories}/${id}`);
    
    // TODO: EXTRAS

    formatToArray = (category) => category && category.map(path => path.name) 

    formatApiToArray = async (category) => {
        const categoryResult = await category
        return categoryResult && categoryResult.path_from_root.map(path => path.name) 
    } 
    
    formatCategory = async(itemsResponse: ItemSearchI) => {
        const availableFilters = itemsResponse?.available_filters
        const firstCategoryId = itemsResponse.results[0]?.category_id
        
        return  this.formatToArray(availableFilters) ?? 
                this.formatApiToArray(this.getById(firstCategoryId))
    };


}