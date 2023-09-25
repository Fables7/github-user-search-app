import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetGithubUser = (username: string) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["githubUser", username],
    async () => {
      const { data: responseData } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("username is", username);
      return responseData;
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isError, refetch };
};
