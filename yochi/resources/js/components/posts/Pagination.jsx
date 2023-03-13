import styled from "styled-components";
// import qs from 'qs';
import Button from "../common/Button";

const PaginationBlock = styled.div`
    width: 320px;
    margin: 1.5rem auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

// const buildLink = ({ username, tag, page }) => {
//     const query = qs.stringify({ tag, page });
//     return username ? `/@${username}?${query}` : `/?${query}`;
// };

const Pagination = () => {
    return(
        <PaginationBlock>
            <Button>
                이전
            </Button>
            <PageNumber>1</PageNumber>
            <Button>
                다음
            </Button>
        </PaginationBlock>
    );
};

export default Pagination;