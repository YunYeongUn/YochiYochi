import React, { useRef } from "react";
import { Head, usePage, useForm, Link } from "@inertiajs/inertia-react";
import styled from 'styled-components';
import Button from "@/components/common/Button";
import Editor from "../components/write/Editor";
import Responsive from "../components/common/Responsive";
// import PostPasswordBox from "@/components/write/PostPasswordBox";
import WriteActionButtons from "@/components/write/WriteActionButtons";
import FileAttachment from "@/components/write/FileAttachment";

const EditorBlock = styled(Responsive)`
    /* 페이지 위아래 여백 지정 */
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid gray;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    ouline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;
    width: 100%;
`;

const ContentWrapper = styled.div`
    width: 100%;
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 45vh;
    outline: none;
    border: none;
    font-size: 1.2rem;
`;

const FileAttachmentBlock = styled.div`
    margin-top: 1rem;
`;

const WriteActionButtonsBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }

    .upload {
        background-color: #3e8df4;
    }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이 설정 후 서로 간 여백 설정 */
const StyledButton = styled(Button)`
    height: 2.125rem;
    margin-right: 1rem;
`;

export default function EditPage(props) {
  const { pocket } = usePage().props;
  const { url } = usePage();
  let board_id;

  const { data, setData, errors, post } = useForm({
    post_title: pocket.post_title || "",
    post_content: pocket.post_content || "",
    attachment: pocket.attachment || null,
  });

  if(url === '/board/1/create') {
    board_id = 1;
  } else if(url === '/board/2/create') {
    board_id = 2;
  }

  // const { files } = usePage().props;

  // const fileInput = useRef(null);

  // const handleButtonClick = e => {
  //     fileInput.current.click();
  // };

  const handleChange = e => {
      console.log(e.target.files[0]);
      setData("attachment", e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    post(route('board.update', {board_id: pocket.board_id, id: pocket.id}));

    setData("post_title", "");
    setData("post_content", "");
    setData("attachment", null)
  }

  return (
    <Responsive>
      {board_id === 1 ? <Head title="게시글 작성" /> : <Head title="문의 게시글 작성" />}
      <form name="createForm" onSubmit={handleSubmit}>
      <EditorBlock>
            <TitleInput
                type="text"
                name="post_title"
                value={data.post_title}
                onChange={(e) => setData("post_title", e.target.value)}
                placeholder='제목을 입력하세요'
                />
            {errors && <span>{errors.post_title}</span>}
            <ContentWrapper>
                <ContentInput
                    name="post_content"
                    type="text"
                    errors={errors.post_content}
                    value={data.post_content}
                    onChange={(e) => setData("post_content", e.target.value)}
                    placeholder='내용을 입력하세요' />
                {errors && <span>{errors.post_content}</span>}
            </ContentWrapper>
        </EditorBlock>
        <FileAttachmentBlock>
            {/* <Button onClick={handleButtonClick}>파일 업로드</Button> */}
            <input
                type="file"
                name="attachment"
                onChange={handleChange} />
            {errors && <span>{errors.attachment}</span>}
        </FileAttachmentBlock>
        <WriteActionButtonsBlock>
            <StyledButton type="submit" className="upload">
                포스트 수정
            </StyledButton>
            <Link href={`/board/${board_id}`}><StyledButton>취소</StyledButton></Link>
        </WriteActionButtonsBlock>
      </form>
    </Responsive>
  );
};