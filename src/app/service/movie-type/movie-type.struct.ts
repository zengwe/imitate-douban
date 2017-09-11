import { serverRes } from '../request/request.struct';
export interface movieType{
    id: number,
    name: string,
    priority: number,
    create_time: number,
    updata_time: number
}
export interface movieTypeRes extends serverRes{
    data:movieType[]
}