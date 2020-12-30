import styled from 'styled-components/native';

export const ActivityListItem = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const ActivityListItemTitle = styled.Text`
    font-size: 16px;
    
`;

export const ActivityListItemImage = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    width: 48px;
    height: 48px;
    margin: 0 5px 0 0;
`;

export const ActivityListItemDescription = styled.Text`
    max-width: 75%;
    padding: 0 15px;
`;

export const ActivityListItemDay = styled.Text`
    font-size: 12px;
    color: #222;
    padding: 0 15px;
`;

export const ActivityListItemPostImage = styled.Image`
    width: 48px;
    height: 48px;
`;