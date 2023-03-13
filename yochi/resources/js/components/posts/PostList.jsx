import React from "react";
import styled from "styled-components";
import { Link, usePage, Head } from "@inertiajs/inertia-react";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from '../common/SubInfo';

const PostListBlock = styled(Responsive)`
    margin-top: 2rem;

    .board-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
    }
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid lightgray;
`;

const PostItemBlock = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    div {
        justify-content: space-between;
        display: flex;  
    }
    
    /* 맨위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid gray;
    }
    &:last-child {
        border-bottom: 1px solid lightgray;
        padding-bottom: 1rem;
    }

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: gray;
        }
    }
`;

const PostItem = ({ id, board_id, users, post_title, updated_at, attachment, answer }) => {
    // const { url } = usePage();
    // const { id, board_id, name, post_title, updated_at, attachment } = post;

    let attach = attachment;
    if(attach !== null && attach.length >= 10) {
        attach = attach.substring(0, 9) + "...";
    }

    let answered = answer;

    return(
        <PostItemBlock>
            <div>
                <h2>
                    <Link href={`/board/${board_id}/${id}`}>{post_title}</Link>
                </h2>
                    <SubInfo username={users.name} publishedDate={updated_at} attachment={attach} answer={answered} />
            </div>
        </PostItemBlock>
    );
};

const PostList = ({ posts, auth }) => {
    const { url } = usePage();
    // const { posts } = usePage().props;
    // 에러 발생 시
    // if(error) {
    //     return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    // }

    return(
        <PostListBlock>
            {url === '/board/1' ? (
                <>
                    <Head title="자유게시판" />
                    <div className="board-title">자유 게시판</div>
                </> ) : (
                <>
                    <Head title="문의게시판" />
                    <div className="board-title">문의 게시판</div>
                </> )}
            <WritePostButtonWrapper>
                {auth.user &&
                    <Link href={`${url}/create`}>
                        <Button>
                            새 글 작성하기
                        </Button>
                    </Link>
                }
            </WritePostButtonWrapper>
            {/* 포스트 배열 존재할 때만 보여줌 */}
            {posts && (
                <div>
                    {posts.map((data, index) => (
                        <PostItem key={index} {...data} />
                    ))}
                </div>
            )
            }
        </PostListBlock>
    );
};

export default PostList;