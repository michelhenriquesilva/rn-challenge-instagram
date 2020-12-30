import React from 'react';
import { ScrollView, Text } from 'react-native';
import AvatarStories from '../../components/AvatarStories';
import { 
    Feed,
    FeedCard,
    FeedCardActions,
    FeedCardActionsIcon,
    FeedCardDescription,
    FeedCardHader,
    FeedCardHaderActions,
    FeedCardHaderAvatar,
    FeedCardHaderName,
    FeedCardImage
} from '../../components/Feed';
import Icon from 'react-native-vector-icons/Feather';
import { HeaderContainer, HeaderButton, HeaderLogo } from './styles';
import imgLogo from '../../images/logo.png';

import avatarSebrae from '../../images/data/avatar/118578148_948047345663764_9113621882026274265_n.jpg';
import avatarNubank from '../../images/data/avatar/65001157_2355760991372334_8233180645455560704_n.jpg';

import postSebrae from '../../images/data/posts/131892208_835225787261102_4976857652689894746_n.jpg';
import postNubak from '../../images/data/posts/120096112_748669975975718_5843693808495232020_n.jpg';

export default function Home(){

    const feedList = [
        {
            id: '1',
            avatar: avatarSebrae,
            nickname: 'sebrae.oficial',
            image: postSebrae
        },
        {
            id: '2',
            avatar: avatarNubank,
            nickname: 'nubank',
            image: postNubak
        }
    ]

    return(
        <>
            <HeaderContainer>
                <HeaderButton>
                    <Icon name="camera" size={25}/>
                </HeaderButton>
                <HeaderLogo source={imgLogo}></HeaderLogo>
                <HeaderButton>
                        <Icon name="send"  size={25}/>
                </HeaderButton>
            </HeaderContainer> 
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
                <AvatarStories />
                <Feed>
                    {                     
                        feedList.map( feedItem => {
                            return(
                                <FeedCard key={feedItem.id}>
                                    <FeedCardHader>
                                        <FeedCardHaderAvatar source={feedItem.avatar} />
                                        <FeedCardHaderName>{feedItem.nickname}</FeedCardHaderName>
                                        <FeedCardHaderActions>
                                            <Icon name="more-vertical" size={22} />
                                        </FeedCardHaderActions>
                                    </FeedCardHader>
                                    <FeedCardImage source={feedItem.image} />
                                    <FeedCardActions>
                                        <FeedCardActionsIcon><Icon name="heart" size={26} /></FeedCardActionsIcon>
                                        <FeedCardActionsIcon><Icon name="message-circle" size={26} /></FeedCardActionsIcon>
                                        <FeedCardActionsIcon><Icon name="send" size={26} /></FeedCardActionsIcon>
                                        <FeedCardActionsIcon style={{position: 'absolute', right: 10}}><Icon name="bookmark" size={28} /></FeedCardActionsIcon>
                                    </FeedCardActions>
                                    <FeedCardDescription>
                                        Curtido por <Text style={{fontWeight: 'bold'}}>palomabrumideas</Text> e <Text style={{fontWeight: 'bold'}}>outras pessoas</Text> 
                                        <Text style={{fontWeight: 'bold'}}>toroinvestimentos</Text> 🎉 Você sabia que somos a primeira corretora a combinar Corretagem Zero em...  
                                    </FeedCardDescription>
                                </FeedCard>
                            )
                        })
                    }
                </Feed>
            </ScrollView>
        </>
    )
}