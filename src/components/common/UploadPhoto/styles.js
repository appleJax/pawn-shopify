import styled from 'styled-components'

export const Center = styled.div`
    text-align: center;
`

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const Field = styled.div`
    margin-bottom: 2rem;
    border: 3px solid #E8E9F6;
    background: #fff;
    padding: .5rem 1rem;

    &:focus {
        outline: none;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        flex: 1 auto;
        width: 100%;
        max-width: 48%;

        &:focus {
            outline: none;
        }
    }
`

export const DefaultButton = styled.button`
    background: none;
    color: red;
    cursor: pointer;
    border: none;
`
