export function useBaseDetail(api){
    const loadDetail = async(id) => {debugger;
        var product = await api.getProduct(id);
        return product;
    }
    return {
        loadDetail,
    }
}