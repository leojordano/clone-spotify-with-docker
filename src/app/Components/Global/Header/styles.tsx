import styled from "styled-components";

const SIDEBAR_WIDTH = "112px";

export const SHeader = styled.header`
    width: calc(100% - ${SIDEBAR_WIDTH});
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    position: fixed;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        background-color: ${({ theme }) => theme.colors.lightGray}80;
        border-radius: 100%;
    }
`