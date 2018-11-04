import styled from 'styled-components'

export const Button = styled.button`
    background: #5C6AC4;
    border: none;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
    margin: 5px;
    padding: .6rem 1.5rem;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;

    ${({ margin }) => margin && `
        margin-bottom: ${margin};
    `}
`
