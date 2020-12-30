import React from 'react';
import { Text } from 'react-native';
import { 
    ActivityListItem, 
    ActivityListItemDay, 
    ActivityListItemDescription, 
    ActivityListItemImage, 
    ActivityListItemPostImage
} from './styles';


interface ActivityListProps {
    id: number,
    avatar: string;
    image: string;
    description: string;
    day: string;
}

function ActivityListItemTitle(props: any){
    return(
        <Text style={{padding: 20, fontSize: 16}}>{props.title}</Text>
    )
}

function ActivityList(props: any){
    return(
        <ActivityListItem>
            <ActivityListItemImage source={{ uri: props.item.avatar }} />
            <ActivityListItemDescription>
                
                <Text style={{fontWeight: '700'}}>{props.item.description.first_nick}</Text>,{" "}
                <Text style={{fontWeight: '700'}}>{props.item.description.second_nick}</Text> e{" "}
                <Text style={{fontWeight: '700'}}>outras pessoas</Text> <Text>curtiram a sua publicação</Text>
                .
                <ActivityListItemDay>{props.item.day}</ActivityListItemDay>
            </ActivityListItemDescription>
            <ActivityListItemPostImage source={{ uri: props.item.image}} />
        </ActivityListItem>
    )
}

export {ActivityListItemTitle, ActivityList};