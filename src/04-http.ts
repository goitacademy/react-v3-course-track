/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from "axios";

interface Post {}

interface GetPostsResponse {}

const getAllPosts = async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data;
};

const getPostById = async (postId) => {
  const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
  return response.data;
};

const createPost = async (newPost) => {
  const response = await axios.post("https://dummyjson.com/posts/add", newPost);
  return response.data;
};
