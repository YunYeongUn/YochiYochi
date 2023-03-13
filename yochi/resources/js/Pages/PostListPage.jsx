import React from "react";
import Header from "../components/common/Header";
import PostList from "@/components/posts/PostList";
import Pagination from "@/components/posts/Pagination";
import { usePage } from "@inertiajs/inertia-react";
// import PaginationContainer from "../containers/posts/PaginationConatiner";

const PostListPage = (props) => {
  const { posts } = usePage().props;

  return(
    <>
      <Header auth={props.auth} errors={props.errors} />
      <PostList posts={posts} auth={props.auth} />
      <Pagination />
      {/* <PaginationContainer /> */}
    </>
  );
};

export default PostListPage;