import React, { useState } from 'react';
import {Modal, View} from 'react-native';
import Animated from 'react-native-reanimated';
import { ModalSheetContainer, ModalSheetOverlay } from './styles';

interface ModalSheetProps{
    visibled: boolean;
    children: any;
}

export default function ModalSheet(props: ModalSheetProps){

    const [visibled, setVisibled] = useState(props.visibled);

    return(
        <Modal
            animationType="slide"
            visible={visibled}
            transparent={true}
        >
            <ModalSheetOverlay onPress={ () => setVisibled(false) }>
                <Animated.View>
                    <ModalSheetContainer>                        
                        {props.children}
                    </ModalSheetContainer>
                </Animated.View>
            </ModalSheetOverlay>
        </Modal>
    )
}