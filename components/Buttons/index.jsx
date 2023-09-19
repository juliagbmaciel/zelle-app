import React from 'react';
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`

  padding: ${props => props.padding};
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  text-align: center;
  margin-top:  ${props => props.marginTop};
  justify-content: center
`;
const ButtonText = styled.Text`

  font-size: ${props => props.fontSize};
  text-align: center;
  color: ${props => props.colorTitle} ;
  font-family: 'bold'
`;
const PressableButton = ({  marginTop, bgColor, title, radius, padding, colorTitle, onPress, fontSize }) => (
  <ButtonContainer  marginTop={marginTop ? marginTop : "12px"}bgColor={bgColor}  padding={padding ? padding : '11px 99px'} radius={radius ?  radius : '30px'} onPress={onPress}>
    <ButtonText fontSize={fontSize ? fontSize : "16px"} colorTitle={colorTitle ? colorTitle : "#171715"}>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;