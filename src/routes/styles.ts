import styled from 'styled-components/native';

interface AvatarImageBorderProps{
    active: boolean;
}

export const AvatarImage = styled.Image`
    width: 26px;
    height: 26px;
    padding: 13px;
    border-radius: 25px;
`;

export const AvatarImageBorder = styled.View<AvatarImageBorderProps>`
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    border: 1px solid ${props => {
        return props.active ? '#000' : '#fff'
    }}
`;