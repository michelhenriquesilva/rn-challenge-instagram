import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Header = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 10px 15px;
    justify-content: flex-start;
`;

export const ButtonPlus = styled.TouchableOpacity`
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 25px 0 0;
`;

export const UserName = styled.Text`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonMenu = styled.View`
    position: absolute;
    top: 5px;
    right: 10px;
`;

export const ProfileNumbers = styled.View`
    padding: 15px 0 0 0;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Avatar = styled.View`
    padding: 0 0 0 15px;
`;

export const AvatarImage = styled.Image`
    border-radius: 100px;
    width: 90px;
    height: 90px;
`;

export const IconPlus = styled.TouchableOpacity`
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    background: #0095f6;
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 0px;
    right: 5px;    
`;

export const Numbers = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
`;

export const NumberItem = styled(RectButton)`
    margin: 0 5px;
    align-items: center;
    justify-content: space-between;
`;

export const NumberStrong = styled.Text`
    font-size: 18px
    font-weight: bold;
`;

export const NumberLabel = styled.Text`

`;

export const BiographyContainer = styled.View`
    padding: 10px 15px;
`;

export const BiographyName = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const BiographyDescription = styled.Text`
    font-size: 14px;
`;

export const ButtonEdit = styled.TouchableOpacity`
    font-weight: bold;
    background: #fff;
    align-items: center;
    justify-content: center;
    border:1px solid #aaa;
    border-radius: 4px;
    padding: 5px;
`;

export const StoriesList = styled.View`
    padding: 10px 0;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const StoriesListItem = styled.View`
    width: 100px;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export const StoriesListItemMedia = styled.View`
    border: 1px solid #aaa;
    border-radius: 70px;
    width: 70px;
    height: 70px;
    padding: 4px;
`;
export const StoriesListItemImage = styled.Image`
    border-radius: 60px;
    width: 60px;
    height: 60px;
`;
export const StoriesListItemLabel = styled.Text`
    font-size: 12px;
`;

export const StoriesListItemIcon = styled.View`
    border:0.5px solid #000;
    border-radius: 70px;
    width: 62px;
    height: 62px;
    align-items: center;
    justify-content: center;
`;

export const FeedPhotos = styled.FlatList`
    
`;

export const PhotoItem = styled.View`    
    margin: 2px;
    width: 33%;
    height: 150px;
`;

export const PhotoItemImage = styled.Image`
    width: 100%;
    height: 150px;
`;