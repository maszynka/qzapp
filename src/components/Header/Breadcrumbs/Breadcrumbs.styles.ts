import styled from "styled-components/macro";

interface BreadcrumbsProps {
    left: number,
}

export const Breadcrumbs = styled.ul<BreadcrumbsProps>`
    padding: ${({ left }) => left}px;
    margin: 0;
    list-style: none;
    color: white;
`;
