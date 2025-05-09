import { User, UserResponse } from "@/types/my";
import api from "./api";
import { useMutation , useQuery} from "@tanstack/react-query";


export const DeleteUser = async():Promise<UserResponse<null>> => {
    try{
        const res = await api.delete('/users');
        return res.data;
    }catch(error){
        console.error('Failed to delete user:', error);
        throw error;
    }
}

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: DeleteUser,
        onSuccess: () =>{
            alert('회원 탈퇴가 완료되었습니다.');
            console.log('회원 탈퇴 성공');
        },
        onError: (error:any) => {
            console.error('회원 탈퇴 실패:', error);
            alert('회원 탈퇴에 실패했습니다.');
        },
    })
}

export const getUser = async():Promise<User> => {
    try{
        const res = await api.get('/users');
        return res.data;
    }catch(error){
        console.error('Faild to get user infomation', error);
        throw error;
    }

}

export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn : getUser,
    });
};