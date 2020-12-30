import React from 'react';
import { AvatarStoriesList, AvatarStoryItem, AvatarGradient, AvatarLabel, AvatarStoriesContainer} from './styles';
import { Image } from 'react-native';

export default function AvatarStories(){

    const avatarStoriesList = [
        {
            id: '1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU',
            first_name: 'Seu story'
        },
        {
            id: '2',
            image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160',
            first_name: 'Juliano'
        },
        {
            id: '3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl6JgzT7ezvaoo4IPyyN9-qomlk3k8INggYw&usqp=CAU',
            first_name: 'Fernando'
        },
        {
            id: '4',
            image: 'https://qwcodes.com/try2.tk/eliteadmin/plugins/images/users/4.jpg',
            first_name: 'Juliana'
        },
        {
            id: '5',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl6JgzT7ezvaoo4IPyyN9-qomlk3k8INggYw&usqp=CAU',
            first_name: 'Fernando'
        },
        {
            id: '6',
            image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160',
            first_name: 'Juliano'
        }
    ]

    return(
        <AvatarStoriesContainer horizontal={true} showsHorizontalScrollIndicator={false}>
            <AvatarStoriesList>
                {
                    avatarStoriesList.map( item => {
                        return(
                            <AvatarStoryItem key={item.id}>
                                <AvatarGradient>
                                    <Image style={{width: 65, height: 65, borderRadius: 100}} source={{ uri: item.image}} />
                                </AvatarGradient>
                                <AvatarLabel>{item.first_name}</AvatarLabel>
                            </AvatarStoryItem>
                        );
                    })
                }
            </AvatarStoriesList>
        </AvatarStoriesContainer>
    );
}