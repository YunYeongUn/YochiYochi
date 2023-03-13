import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const PostPasswordBoxBlock = styled.div`
    width: 100%;
    padding-top: 1rem;

    h4 {
        color: black;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const PostPasswordForm = styled.div`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid gray; /* 스타일 초기화 */
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }

    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: #232429;
        color: white;
        font-weight: bold;
        &:hover {
            background: rgba(60, 179, 113, 1.0);
        }
    }
`;
 
const PostPasswordBox = () => {
    return(
        <PostPasswordBoxBlock>
            <h4>비밀글 설정</h4>
            <PostPasswordForm>
                <input
                    placeholder="비밀번호를 입력하세요"
                />
                <button type="submit">확인</button>
            </PostPasswordForm>
        </PostPasswordBoxBlock>
    );
};

export default PostPasswordBox;