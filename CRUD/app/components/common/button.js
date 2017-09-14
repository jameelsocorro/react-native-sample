import React from 'react';
import styled from 'styled-components/native';

const ButtonFlex = styled.TouchableOpacity`
    flex: 1;
    alignSelf: stretch;
    backgroundColor: #fff;
    borderRadius: 5;
    borderWidth: 1;
    borderColor: #007aff;
    marginLeft: 8;
    marginRight: 8;
    marginTop: 8;
    marginBottom: 8;
`;

const ButtonText = styled.Text`
    alignSelf: center;
    color: #007aff;
    fontSize: 16;
    fontWeight: 600;
    paddingTop: 10;
    paddingBottom: 10;
`;

const Button = ({ onPress, children }) => (
    <ButtonFlex onPress={onPress}>
        <ButtonText>
            {children}
        </ButtonText>
    </ButtonFlex>
);

export { Button };
