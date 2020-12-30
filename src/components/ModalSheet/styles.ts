import styled from 'styled-components/native';

export const ModalSheetOverlay = styled.TouchableOpacity`
    backgroundColor: rgba(0,0,0,0.2);
    flex: 1;
    justifyContent: flex-end;
`;

export const ModalSheetContainer = styled.View`
    padding: 15px;
    background: #fff;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;