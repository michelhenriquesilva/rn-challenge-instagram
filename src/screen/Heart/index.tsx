import React from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import { ActivityList, ActivityListItemTitle } from '../../components/ActivityList';


interface ActivityListProps{
    id: string;
    avatar: string;
    description: {
        first_nick: string;
        second_nick: string;
    },
    image: string;
    day: string;
}

export default function Heart(){

    const weekendList = [
        {
            id: '1',
            avatar: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118578148_948047345663764_9113621882026274265_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_ohc=GGdQ8SyN1CUAX_bb2vO&oh=2dcffc95a8e842dbad974927dc3e5354&oe=5FC93ACF',
            description: {first_nick: 'cassio_paiva2', second_nick: 'julino789'},
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/123494331_214291576787907_8877162200483767656_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=OAZ2z8cnj1cAX-J-qlm&_nc_tp=24&oh=1ace4705f9842c9155dbe6621ddfa233&oe=5FCB9B0E',
            day: '4 d'
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU',
            description: {first_nick: 'cassio_paiva2', second_nick: 'julino789'},
            image: 'https://instagram.flaz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/118397454_741787556657370_1770803320962108758_n.jpg?_nc_ht=instagram.flaz1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=IiN8vfrf2UkAX_HC-zL&_nc_tp=24&oh=7d55badd05a66c1bbbbda61c4f66d9f3&oe=5FCC81BC',
            day: '5 d'
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU',
            description: {first_nick: 'cassio_paiva2', second_nick: 'julino789'},
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU',
            day: '5 d'
        }
    ];

    function renderItem ({item}){
        return(
            <ActivityList item={item} />
        );
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <ActivityListItemTitle title="Hoje"></ActivityListItemTitle>
            <FlatList 
                data={weekendList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <ActivityListItemTitle title="Esta semana"></ActivityListItemTitle>
            <FlatList 
                data={weekendList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <ActivityListItemTitle title="Este mês"></ActivityListItemTitle>
            <FlatList 
                data={weekendList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}