import React from 'react';
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`

  padding: ${props => props.padding};
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  text-align: center;
  margin-top: 12px
`;
const ButtonText = styled.Text`

  font-size: 16px;
  text-align: center;
  color: ${props => props.colorTitle} ;
  font-family: 'bold'
`;
const PressableButton = ({  bgColor, title, radius, padding, colorTitle, onPress }) => (
  <ButtonContainer  bgColor={bgColor}  padding={padding ? padding : '11px 99px'} radius={radius ?  radius : '30px'} onPress={onPress}>
    <ButtonText colorTitle={colorTitle ? colorTitle : "#171715"}>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;