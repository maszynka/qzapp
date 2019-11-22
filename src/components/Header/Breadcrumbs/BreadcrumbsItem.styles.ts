import styled from "styled-components/macro";

export const BreadcrumbsItem = styled.li`
    display: inline;

    &:before {
        content: ">";
        padding: 0 0.2em;
    }
`;
