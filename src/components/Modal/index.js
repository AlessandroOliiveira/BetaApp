import React, { useState } from 'react';

import {
    StyledContainer,
    InnerContainer,
} from "../styles/BaseConteinerStyles";

import { BoxModal, Modal, ModalButton, ModalText } from '../styles/ModalStyles';
import { ButtonText } from '../styles/TextStyles';


const ModalC = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (

        <>
            <ModalButton>
                <ButtonText onPress={() => setVisible(true)}>
                    Descrição da formula
                </ButtonText>
            </ModalButton>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                <BoxModal>

                    <ModalText>{children}</ModalText>
                    <ModalButton>
                        <ButtonText onPress={() => setVisible(false)}>
                            fechar
                        </ButtonText>
                    </ModalButton>
                </BoxModal>
            </Modal>
        </>


    );
}

export default ModalC;