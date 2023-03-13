import { usePage, useForm } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const FileAttachmentBlock = styled.div`
    margin-top: 1rem;
`

const FileAttachment = ({ props }) => {
    const { files } = usePage().props;

    const { setData, errors } = useForm({
        attachment: null,
    });

    const fileInput = useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };

    const handleChange = e => {
        console.log(e.target.files[0]);
        setData("file", e.target.files[0]);
    };

    return (
        <FileAttachmentBlock>
            <Button onClick={handleButtonClick}>파일 업로드</Button>
            <input
                type="file"
                name="attachment"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: 'none' }} />
            {errors && <span>{errors.attachment}</span>}
            {files && files.map(({ name })=> (
                <span>미리보기 : <img src="{name}" width="20px" /></span>
            ))}
        </FileAttachmentBlock>
    );
};

export default FileAttachment;