import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/githubUser";

export const useGetGithubUser = (username: string) => {
  const dispatch = useDispatch();
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
      console.log("clicked");
      console.log(responseData);
      dispatch(setUser(responseData));
      return responseData;
    },
    {
      retry: false,
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isError, refetch };
};
