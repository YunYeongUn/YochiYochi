import styled from "styled-components";
import Button from '../common/Button';
import { Link, usePage } from "@inertiajs/inertia-react";

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

const WriteActionButtons = () => {
    const { url } = usePage();
    let board_id;

    if(url === '/board/1/create') {
        board_id = 1;
      } else if(url === '/board/2/create') {
        board_id = 2;
      }

    return(
        <WriteActionButtonsBlock>
            <StyledButton type="submit" className="upload">
                포스트 {url === `/board/${board_id}/create` ? '등록' : '수정'}
            </StyledButton>
            {url === '/board/1/create' ?
            <Link href="/board/1"><StyledButton>취소</StyledButton></Link> :
            <Link href="/board/2"><StyledButton>취소</StyledButton></Link> 
        }
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;