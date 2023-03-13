import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { useForm } from '@inertiajs/inertia-react';

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

const Editor = ({ props }) => {
    const { data, setData, errors } = useForm({
        post_title: "",
        post_content: "",
    });

    return(
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
    );
};

export default Editor;