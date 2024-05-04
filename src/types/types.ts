export interface IDeal{
    global_dhs: number
    id: number
    tiket_dhs: number
    yield: string
    days_left: number
    sold: number
    name: string
    img_src: string
}
export interface IUser{
    email: string
    id: number
    token: string
}

export interface IUserData{
    email: string
    password: string
}
export interface IResponseUser {
    email: string
    id: number
    password: string
}
export interface IResponseUserData{
    token: string
    user: IResponseUser
}