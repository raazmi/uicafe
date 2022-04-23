import { http } from "../lib/http";

export const getBestSellingProducts = async () => {
    let res = await http.get(`/products`);
    return res;
};