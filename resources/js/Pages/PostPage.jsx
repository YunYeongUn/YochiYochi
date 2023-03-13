import Header from "../components/common/Header";
import PostViewer from "@/components/post/PostViewer";
import CommentList from "@/components/post/CommentList";

const PostPage = (props) => {
  return(
    <>
      <Header auth={props.auth} errors={props.errors} />
      <PostViewer props={props} />
      {/* <CommentList props={props} /> */}
    </>
  );
};

export default PostPage;