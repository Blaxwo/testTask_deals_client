import {IResponseUserData, IUser, IUserData} from "../types/types.ts";
import {instance} from "../api/axios.api.ts";

export const AuthService = {
    async registration(userData: IUserData):
        Promise<IResponseUserData | undefined> {
        try {
            const {data} = await instance.post<IUserData, {data: IResponseUserData}>('user', userData);
            return data;
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    },
    async login(userData: IUserData): Promise<IUser | undefined> {
        const {data} = await instance.post<IUser>('auth/login', userData)
        return data;
    },
    async getProfile(): Promise<IUser | undefined> {
        const {data} = await  instance.get<IUser>('auth/profile')
        if(data) return data
    }
}