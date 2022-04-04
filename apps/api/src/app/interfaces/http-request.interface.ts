export interface HttpRequestI {
    get: (url: string) => Promise<any>
}