
const service = async ({ url, method }: { url: string, method: string }) => {
    return await fetch(url, {
        method
    });
};
export default service;