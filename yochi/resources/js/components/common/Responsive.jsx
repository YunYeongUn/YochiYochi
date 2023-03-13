import styled from "styled-components";

const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    margin: 0 auto; /* 중앙 정렬 */
    
    /* 브라우저 크기 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    `;

const Responsive = ({ children, ...rest }) => {
    // style, className, onClick, onMouseMove 등 props 사용할 수 있도록
    // ...rest 사용해 ResponsiveBlock에 전달
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;