import styled from 'styled-components/native';

export const Feed = styled.View`
    padding: 15px 0;
`;

export const FeedCard = styled.View`

`;

export const FeedCardHader = styled.View`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const FeedCardHaderAvatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin: 0 10px;
`;

export const FeedCardHaderName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`;

export const FeedCardHaderActions = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
`;

export const FeedCardImage = styled.Image`
    margin: 8px 0;
    height: 420px;
`;

export const FeedCardActions = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 0 10px;
`;

export const FeedCardActionsIcon = styled.TouchableOpacity`
    margin: 0 5px;
`;

export const FeedCardDescription = styled.Text`
    padding: 15px;
`;