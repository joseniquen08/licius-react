import { Provider } from "react-redux";
import { postStore } from "../stores";

const PostProvider = ({ children }) => {
  return <Provider store={postStore}>{children}</Provider>
}

export default PostProvider;