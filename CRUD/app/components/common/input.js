import React from 'react';
import styled from 'styled-components/native';

const InputContainer = styled.View`
    height: 40;
    flex: 1;
    flexDirection: row;
    alignSelf: center;
`;

const InputText = styled.TextInput`
    color: #000;
    paddingRight: 5;
    paddingLeft: 5;
    fontSize: 18;
    lineHeight: 23;
    flex: 2;    
`;

const InputLabel = styled.Text`
    fontSize: 18;
    paddingLeft: 20;
    flex: 1;
    paddingTop: 10;
`;

const Input = ({ label, value, onChangeText, placeholder }) => (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputText
            autoCorrect={false}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    </InputContainer>
);

export { Input };
