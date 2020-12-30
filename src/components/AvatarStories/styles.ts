import styled from 'styled-components/native';

export const AvatarStoriesContainer = styled.ScrollView`
    width: 100%;
`;

export const AvatarStoriesList = styled.View`
    margin: 0;
    padding: 5px;
    flex-direction: row;
    border:1px solid #eee;
`;

export const AvatarStoryItem = styled.View`
    align-items: center;
    justify-content: center;
    width: 85px;
`;

export const AvatarGradient = styled.View`
    padding: 3px;
    border: 1px solid #ddd;
    border-radius: 100px;
`;

export const AvatarLabel = styled.Text`
    font-size: 11px;
`;