import styled from 'styled-components'

export const Label = styled.span`
    border-radius: 3px;
    padding: .5rem 1rem;
    width: 100%;
    max-width: 15%;
    margin-bottom: 1.5rem;
    flex: 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #eee;
    transition: .3s;

    ${({ isSelected }) => isSelected && `
        background: #5C6AC4;
        color: #fff;
        transition: .3s;
    `}

    @media (max-width: 960px) {
        max-width: 100%;
    }

`

export const Labels = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: space-between;
`

export const Input = styled.input`
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: 3px solid #E8E9F6;
    background: #fff;
    padding: .5rem 1rem;
    width: 70%;

    &:focus {
        outline: none;
    }
`

export const Img = styled.div`
    margin-top: 2rem;

    img {
        width: 60%;
        margin: 0 auto;
    }
`
