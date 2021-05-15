import axios from 'axios';
import { CHANGE_LIST } from "./constants";

axios.defaults.baseURL = 'http://localhost:3001';
//普通action
const changeList = list => ({
    type: CHANGE_LIST,
    payload: list
});

//异步操作的action(采用thunk中间件)
export const getHomeList = () => {
    console.log('getHomeList');
    return (dispatch, getState, axiosInstance) => {
        console.log('getHomeList dispatch');
        return axios.get('/api/list')
            .then((res) => {
                const list = res.data;
                console.log('list', list)
                dispatch(changeList(list.data))
            }).catch((err) => {
                console.log('err', err);
            });
    };
}
