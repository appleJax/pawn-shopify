import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    @media (max-width: 680px) {
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    @media (max-width: 680px) {
        background: #eee;
        width: 100%;
        transition: .4s;
        height: 80px;
        overflow-y: hidden;

        ${({ active }) => active && `
            transition: .4s;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            height: 100vh;
        `}
    }
`
