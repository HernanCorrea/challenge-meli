import { apiUrl } from '../../environments/environment';
import { HttpRequestI } from '../interfaces';
import { ItemSearchI } from '../interfaces/item-search.iterface';

export class CategoryService {
  private http: HttpRequestI;
  constructor(private httpRequest: HttpRequestI) {
    this.http = httpRequest;
  }

  getById = async (id: string) => this.http.get(`${apiUrl.categories}/${id}`);

  // TODO: EXTRAS
  formatCategory = async (itemsResponse: ItemSearchI) => {
    const availableFilters =
      itemsResponse?.filters?.[0]?.values?.[0]?.path_from_root;
    return this.formatToArray(availableFilters) || [itemsResponse.query];
  };

  getFormatById = async (id: string) => {
    return this.formatApiToArray(this.getById(id));
  };

  formatToArray = (category) => category && category.map((path) => path.name);

  formatApiToArray = async (category) => {
    const categoryResult = await category;
    return (
      categoryResult && categoryResult.path_from_root.map((path) => path.name)
    );
  };
}
