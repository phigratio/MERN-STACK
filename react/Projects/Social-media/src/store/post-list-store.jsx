import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Dhaka",
    body: "Hi Friends,I am going to dhaka for vacation,Hope to enjoy a lot",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Enjoying"],
  },
  {
    id: "2",
    title: "Going To Chittagong",
    body: "Hi Friends,I am going to go for vacation,Hope to enjoy a lot",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Enjoying"],
  },
];
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

PostListProvider.propTypes;
export default PostListProvider;
