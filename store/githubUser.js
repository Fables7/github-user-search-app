import { createSlice, createSelector } from "@reduxjs/toolkit";

export const githubUserSlice = createSlice({
  name: "githubUser",
  initialState: {
    username: "",
    name: "",
    userCreated: "",
    avatar: "",
    hmtl_url: "",
    repos: null,
    followers: null,
    following: null,
    blog: "",
    location: "",
    bio: "",
    company: "",
    id: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.login;
      state.name = action.payload.name;
      state.userCreated = action.payload.created_at;
      state.avatar = action.payload.avatar_url;
      state.html_url = action.payload.html_url;
      state.repos = action.payload.public_repos;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.blog = action.payload.blog;
      state.location = action.payload.location;
      state.bio = action.payload.bio;
      state.company = action.payload.company;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = githubUserSlice.actions;

export default githubUserSlice.reducer;
