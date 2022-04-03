export const environment = {
  production: false,
  baseUrl: 'https://api.mercadolibre.com',  
  location: 'MLA'
};
export const apiUrl = {
  search: `${environment.baseUrl}/sites/${environment.location}/search`, 
  categories: `${environment.baseUrl}/categories`, 
  items: `${environment.baseUrl}/items`, 
};

export const authorObject = {
  name: "Hernán",
  lastname: "Correa",
}