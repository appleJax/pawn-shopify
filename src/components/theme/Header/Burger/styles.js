import styled from 'styled-components'

export const Hamburger = styled.div`
    position: absolute;
    top: 32px;
    right: 15px;
    height: 20px;
    z-index: 5;
    cursor: pointer;
    display: none;

    @media (max-width: 960px) {
        display: block;
    }
`

export const Bar = styled.div`
    width: 35px;
    height: 2px;
    background-color: #080808;
    transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
                opacity 500ms, box-shadow 250ms, background-color 500ms;
    
    ${({ top, isActive }) => top && isActive && `
		transform: translateY(14px) rotate(-135deg);
	`}

	${({ mid, isActive }) => mid && isActive && `
		transform: scale(0);
	`}

	${({ bottom, isActive }) => bottom && isActive && `
		transform: translateY(-6px) rotate(-45deg);
	`}

    ${({ mid }) => mid && `
        margin: 8px 0;
    `}
`
