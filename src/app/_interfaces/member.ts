export interface Member {
    _id:string;
    civilite: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_type: string;
    status: boolean;
    profileUrl: string;
    __v: number;
}
export class CMember {
    _id?:string;
    civilite?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    user_type?: string;
    status?: number;
    profileUrl?: string;
    __v?: number;
}
