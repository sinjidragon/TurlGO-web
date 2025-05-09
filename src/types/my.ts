export interface ModalType {
    modal:boolean;
    setModal:React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserResponse<T = any>{
    status:Number,
    state:string,
    message:string,
    data:T,
}

export interface User{
    id: Number,
    username: string,
    email: string,
    state: string,
    deletedAt: string,
    isTested: boolean,
    testData: string,
}