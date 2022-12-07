import useSWR from "swr";

export const useData = (url) => {
  const { data, error } = useSWR(`/api/${url}`);

  return {
    data: data || undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
