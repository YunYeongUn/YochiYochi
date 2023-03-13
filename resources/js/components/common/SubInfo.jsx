import styled, { css } from "styled-components";
import { Link, usePage } from "@inertiajs/inertia-react";

const SubInfoBlock = styled.div`
   /* ${props =>
        props.hasMarginTop &&
        css`
            margin-top: 1rem;
        `}
    color: gray; */

    font-size: 0.9rem;

    /* span 사이 가운뎃점 문자 보여주기 */
    span + span:before {
        color: gray;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7' /* 가운뎃점 문자 */
    }
`;

const SubInfo = ({ username, publishedDate, attachment, answer, hasMarginTop }) => {
    // const { url } = usePage();

    return(
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
                <b>작성자 : {username}</b>
            </span>
            {answer && <span><b>답변 완료</b></span>}
            {attachment && <span>첨부파일 - {attachment}</span>}
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;