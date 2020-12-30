import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Heart from '../screen/Heart';
import Home from '../screen/Home';
import Plus from '../screen/Plus';
import Profile from '../screen/Profile';
import { AvatarImage, AvatarImageBorder } from './styles';
import Search from '../screen/Search';

const Tabs = createBottomTabNavigator();

export default function AppRoutes(){
    return(
        <Tabs.Navigator
            tabBarOptions={{
                style: {
                    height: 45
                },
                tabStyle: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                    color: '#ddd'
                },
                labelStyle: {
                    fontSize: 10,
                    color: '#ddd'
                },
                showLabel: false
            }}
        >
            <Tabs.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Icon name="home" size={size} color={focused ? '#000' : '#ddd'} />
                        )
                    }
                }}        
            />
            <Tabs.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Icon name="search" size={size} color={focused ? '#000' : '#ddd'} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="Plus"
                component={Plus}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Icon name="plus-square" size={size} color={focused ? '#000' : '#ddd'} />
                        )
                    }
                }}
            />
            <Tabs.Screen 
                name="Heart"
                component={Heart}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Icon name="heart" size={size} color={focused ? '#000' : '#ddd'}/>
                        )
                    }
                }}
            />
            <Tabs.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <AvatarImageBorder active={focused}>                                
                                <AvatarImage                                     
                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYa7cSmpkKorxopZa9gOY6Y3ILEWxHlGPxnw&usqp=CAU'}}
                                />
                            </AvatarImageBorder>
                            // <Icon name="user" size={size} color={focused ? '#000' : '#ddd'} />
                        )
                    }
                }}
            />
        </Tabs.Navigator>
    );
}