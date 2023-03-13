import React from "react";
import styled from "styled-components";
import { Link, usePage, Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from '../common/SubInfo';

const CommentListBlock = styled(Responsive)`
    margin-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid gray;

    .board-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
    }
`;

const CommentItemBlock = styled.div`
    margin-top: 1rem;
    border-top: 1px solid lightgray;
    padding-top: 1rem;
    
    div {
        justify-content: space-between;
        display: flex;  
    }
    
    & + & {
        border-top: 1px solid gray;
    }
    &:last-child {
        border-bottom: 1px solid lightgray;
        padding-bottom: 2rem;
    }

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: gray;
        }
    }

    .deleteComment {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: gray;
    }
    
    .deleteComment:hover {
        border-bottom: 1px solid gray;
        cursor: pointer;
    }
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 10vh;
    outline: none;
    border: none;
    font-size: 0.9rem;
`;

const CommentItem = ({ id, comment, post_id ,created_at,users }) => {
    const { url } = usePage();
    // const { id, board_id, name, post_title, updated_at, attachment } = post;

    let board_id;
    if(url === `/board/1/${post_id}`) board_id = 1;
    else if (url === `/board/2/${post_id}`) board_id = 2; 

    const destroy = (e) => {
        if(confirm("정말 삭제하시겠습니까?")) {
            Inertia.delete(route("comment.destroy", {board_id: board_id, id: post_id, comment_id: id}));
        }
    }
    /*
    if(attach.length >= 10) {
        attach = attach.substring(0, 9) + "...";
    } */
    
    //console.log(name);

    return(
        <CommentItemBlock>
            <div>
                    <h1>{comment}</h1>
                    <SubInfo username={users.name} publishedDate={created_at} attachment={null} answer={null} />
            </div>
            <div>
                <button className="deleteComment" onClick={destroy}>삭제</button>
            </div>
        </CommentItemBlock>
    );
};

const CommentList = ({props}) => {
    const { commentpocket } = usePage().props;

    const { data, setData, errors, post } = useForm({
        comment: "",
        post_id: props.pocket.id
      });

      
    function handleSubmit(e) {
        e.preventDefault();
        post(route('comment.add'));
        setData("comment", "");
    }
    // const { posts } = usePage().props;
    // 에러 발생 시
    // if(error) {
    //     return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    // }
    return(
        <CommentListBlock> 
            <form name="commentForm" onSubmit={handleSubmit}>
                <div>
                    <ContentInput
                        name="comment"
                        type="text"
                        errors={errors.comment}
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                        placeholder='댓글을 입력하세요'
                        required />
                </div>
                    <Button type="submit">등록</Button>
            </form>
            {/* 포스트 배열 존재할 때만 보여줌 */}
            {commentpocket && (
                <div>
                    {commentpocket.map((data, index) => (
                        <CommentItem key={index} {...data}
                        />
                    ))}
                </div>
            )
            }
        </CommentListBlock>
    );
};

export default CommentList;