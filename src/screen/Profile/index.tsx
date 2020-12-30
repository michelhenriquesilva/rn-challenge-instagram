import React, { useState } from 'react';
import { Alert, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import ModalSheet from '../../components/ModalSheet';
import { Avatar, AvatarImage, BiographyContainer, BiographyDescription, BiographyName, ButtonEdit, ButtonMenu, ButtonPlus, FeedPhotos, Header, IconPlus, NumberItem, NumberLabel, Numbers, NumberStrong, PhotoItem, PhotoItemImage, ProfileNumbers, StoriesList, StoriesListItem, StoriesListItemAvatar, StoriesListItemIcon, StoriesListItemImage, StoriesListItemLabel, StoriesListItemMedia, UserName } from './styles';

export default function Profile(){

    const [modalSheetVisibled, setModalSheetVisibled] = useState(false);

    const feedPhotosList = [
        {
            id: '1',
            image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
        },
        {
            id: '2',
            image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg',
        },
        {
            id: '3',
            image: 'https://m.economictimes.com/thumb/msid-68721417,width-1200,height-900,resizemode-4,imgsize-1016106/nature1_gettyimages.jpg',
        },
        {
            id: '4',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ApFBpvSi9MKqOErwPC2rSZDQrjOq8rhk0w&usqp=CAU',
        },
        {
            id: '5',
            image: 'https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/content/images/2020/roots_of_the_landscape_protecting_people_and_roads_-_girls_walking_on_local_road_with_grey_engineering_-_emily_goodwin.jpeg?itok=YqBxNHCD',
        },
        {
            id: '6',
            image: 'https://img.theweek.in/content/dam/week/magazine/health/quickscan/images/2019/7/20/10-Nature-the-best-healer.jpg',
        }
    ];

    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FAFAFA'}}>
                <Header>
                    <ButtonPlus onPress={() => setModalSheetVisibled(true)}>
                        <Icon name="plus" size={28} color="#000"/>
                    </ButtonPlus>
                    <UserName>juliana2152</UserName>
                    <ButtonMenu>
                        <Icon name="menu" size={28} color="#000"/>
                    </ButtonMenu>
                </Header>
                <ProfileNumbers>
                    <Avatar>
                        <AvatarImage source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU'}}/>
                        <IconPlus>
                            <Icon name="plus" size={20} color="#fff"/>
                        </IconPlus>
                    </Avatar>
                    <Numbers>
                        <NumberItem>
                            <NumberStrong>52</NumberStrong>
                            <NumberLabel>Publicações</NumberLabel>
                        </NumberItem>
                        <NumberItem>
                            <NumberStrong>305</NumberStrong>
                            <NumberLabel>Seguidores</NumberLabel>
                        </NumberItem>
                        <NumberItem>
                            <NumberStrong>52</NumberStrong>
                            <NumberLabel>Seguindo</NumberLabel>
                        </NumberItem>
                    </Numbers>
                </ProfileNumbers>
                <BiographyContainer>
                    <BiographyName>Juliana Fernandes</BiographyName>
                    <BiographyDescription>
                        <Text style={{flexDirection: 'column'}}>Advogada</Text>{"\n"}
                        <Text style={{flexDirection: 'column', color: '#003795'}}>💑 @joaocarlos</Text>{"\n"}
                        <Text style={{flexDirection: 'column'}}>.</Text>{"\n"}
                        <Text style={{flexDirection: 'column', color: '#003795'}}>#maedepet</Text>{"\n"}
                    </BiographyDescription>
                    <ButtonEdit>
                        <Text>Editar Perfil</Text>
                    </ButtonEdit>
                </BiographyContainer>
                <StoriesList>
                    <StoriesListItem>
                        <StoriesListItemMedia>
                            <StoriesListItemImage source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU'}}/>
                        </StoriesListItemMedia>
                        <StoriesListItemLabel>Leitura</StoriesListItemLabel>
                    </StoriesListItem>
                    <StoriesListItem>
                        <StoriesListItemIcon>
                            <Icon name="plus" size={28} color="#000" />
                        </StoriesListItemIcon>
                        <StoriesListItemLabel>Novo</StoriesListItemLabel>
                    </StoriesListItem>
                </StoriesList>
                <FeedPhotos
                    data={feedPhotosList}
                    renderItem={ ({ item }: any) => {
                        return(
                            <PhotoItem>
                                <PhotoItemImage source={{uri: item.image}} />
                            </PhotoItem>
                        )
                    }}
                    keyExtractor={(item: any) => item.id}
                    numColumns={3}
                />
            </ScrollView>
            <ModalSheet visibled={modalSheetVisibled}>
                <Text>{modalSheetVisibled}</Text>
            </ModalSheet>
        </>
    )
}