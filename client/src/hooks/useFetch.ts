export async function useFetch<T>(request: () => Promise<T>): Promise<T> {
  return request();
}
