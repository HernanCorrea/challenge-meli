import { ItemI } from "./item.interface"

export interface ItemSearchI {
    site_id: string,
    country_default_time_zone: string,
    query: string,
    paging: Record<string, any>,
    results: Array<ItemI>
    sort: Record<string, any>,
    available_sorts: Array<Record<string, any>>
    filters: Array<Record<string, any>>
    available_filters: Array<Record<string, any>>
}