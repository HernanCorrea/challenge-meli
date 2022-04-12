export const get = async (url: string) => {
  const response = await fetch(url);
  const data = response.json();

  if (Object.prototype.hasOwnProperty.call(data, 'error')) throw data;

  return data;
};

export interface HttpRequestI {
  get: (url: string) => Promise<any>;
}

export default { get };