import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Button from "../common/Button";
import CommentList from "./CommentList";

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
    
    Button {
        
    }
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;

    .img_wrap{
        margin-top: 1rem;
        width: 50%; 
        height: 50%;
    }
`;

const PostLink = styled.div`
    display: flex;
    justify-content: center;

    Button {
        margin: 0 3rem;
    }
`;

const PostViewer = ({ props }) => {
    const { pocket, imgPath } = usePage().props;

    const checkPath = `${imgPath}/images/`;

    const destroy = (e) => {
        if(confirm("정말 삭제하시겠습니까?")) {
            Inertia.delete(route("board.destroy", {board_id: pocket.board_id, id: pocket.id}));
        }
    }

    const edit = (e) => {
        Inertia.get(route("board.edit", {board_id: pocket.board_id, id: pocket.id}))
    }
    // console.log(pocket.id);
    

    // 에러 발생 시
    // if(error) {
    //     if(error.response && error.response.state === 404) {
    //         return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
    //     }
    //     return <PostViewerBlock>오류 발생!</PostViewerBlock>
    // }
    
    // // 로딩 중이거나 아직 포스트 데이터 없을 때
    // if(loading || !post) {
    //     return null;
    // }

    // const { title, body, user, publishDate, tags } = post;
    return(
        <PostViewerBlock>
            <Head title="게시글 보기" />
            <PostHead>
                {props.auth.user.id === pocket.users.id && (<><Button onClick={edit}>수정</Button><Button onClick={destroy}>삭제</Button></>) }
                <h1>{pocket.post_title}</h1>
                <SubInfo
                    username={pocket.users.name}
                    publishedDate={new Date(pocket.updated_at)}
                    attachment={pocket.attachment}
                    hasMarginTop
                />
            </PostHead>
            {/* {actionButtons} */}
            <PostContent>
                <div>{pocket.post_content}</div>
                {pocket.attachment && 
                    <div className="img_wrap">
                        <img src={`${checkPath}${pocket.attachment}`} alt="1" />
                    </div>
                }
            </PostContent>
            <CommentList props={props}/>
            <PostLink>
                {/* <Link href="#">이전</Link> */}
                <Link href={route('board.index', pocket.board_id)}><Button>목록</Button></Link>
                {/* <Link href="#">다음</Link> */}
            </PostLink>
        </PostViewerBlock>
    );
};

export default PostViewer;