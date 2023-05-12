import axiosClient from './axiosClinet';
const API_KEY = '74d1111ff793d2c86a4104bab872bc34';
const moviesApi = {
    getnew1(params) {
        const url = `/new1`;
        return axiosClient.get(url, { params });
    },
    getnew2(params) {
        const url = `/new2`;
        return axiosClient.get(url, { params });
    },
    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/categories/`;
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
};
export default moviesApi;
