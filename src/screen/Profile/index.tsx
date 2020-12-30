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
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/122073542_1229560317443342_6128267479287604074_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5_W9Mf7_nfgAX9_MrIP&_nc_tp=15&oh=d97abd8026b852320c777aa4b1aea676&oe=5FCEF963'
        },
        {
            id: '2',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.106.854.854a/s240x240/101638012_597559151143541_3837942025698353957_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=yQjgNmHaSCIAX8GCl0R&tp=16&oh=cc7015eb7d430e4780bbc8538fabf10e&oe=5FCE56F5',
        },
        {
            id: '3',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/101102119_343369919974602_3040737746599012579_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6kkklXbjiSkAX_EvCFs&_nc_tp=15&oh=4fb0d3b2f248ac3db508818e28de1e9f&oe=5FCCB4A6',
        },
        {
            id: '4',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/79477612_2670701639683014_4844359538042934830_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uwANCGmnMoYAX9j9kIr&_nc_tp=15&oh=e5bcf653b2b4051100c1a87137a37af4&oe=5FCE416D',
        },
        {
            id: '5',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/c236.0.608.608a/s240x240/70613972_206981216975962_2778920907121962935_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mxkqAgdDqxgAX-2NH_W&tp=16&oh=bbeb44df8c186672ff73107083b5c4dd&oe=5FCF8DC1',
        },
        {
            id: '5',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/73208512_756731671457595_1692240296044025530_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=iHVWXV4BdHcAX_luinX&_nc_tp=15&oh=79cefd8a5fd8cfa94b52d0dec3e3434b&oe=5FCF1172',
        },
        {
            id: '5',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/70514823_103560547729413_4354033077924045109_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=uLiko1bZv9MAX-7PCAK&_nc_tp=15&oh=31748ba26a66605f76697c5dd416bf3e&oe=5FCD5A0C',
        },
        {
            id: '5',
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/71000014_433520673993108_7568975020593979304_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KlrPZw-lURQAX-b0Edo&_nc_tp=24&oh=796fd07112f4ee6ce7572c1edc7aa7b4&oe=5FCDFA93',
        }
    ];

    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FAFAFA'}}>
                <Header>
                    <ButtonPlus onPress={() => setModalSheetVisibled(true)}>
                        <Icon name="plus" size={28} color="#000"/>
                    </ButtonPlus>
                    <UserName>henrique.michel</UserName>
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
                    <BiographyName>Michel Henrique</BiographyName>
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
                    renderItem={ ({ item }) => {
                        return(
                            <PhotoItem>
                                <PhotoItemImage source={{uri: item.image}} />
                            </PhotoItem>
                        )
                    }}
                    keyExtractor={item => item.id}
                    numColumns={3}
                />
            </ScrollView>
            <ModalSheet visibled={modalSheetVisibled}>
                <Text>{modalSheetVisibled}</Text>
            </ModalSheet>
        </>
    )
}