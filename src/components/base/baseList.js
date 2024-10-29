import { useRouter } from 'vue-router';

export function useBaseList(api) {
    const router = useRouter();

    const showDetail = async (id) => {
        router.push({ name: 'productDetail', params: { id } });
    }
return {
    showDetail,
};
}