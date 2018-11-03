import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        margin-right: 1rem;

        &:last-child {
            margin-right: unset;
        }
    }
`
