import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetGithubUser = (username: string) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["githubUser"],
    async () => {
      const { data: responseData } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return responseData;
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isError, refetch };
};
