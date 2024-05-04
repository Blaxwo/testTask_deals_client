import {IDeal} from "../types/types.ts";
import {instance} from "../api/axios.api.ts";

export const DealsService = {
    async getAllDeals(): Promise<IDeal [] | undefined> {
        const response = await  instance.get<IDeal[]>('deals')
        if(response) return response.data
    }
}