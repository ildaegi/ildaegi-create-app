import React from 'react';
import { StyledButton, StyledButtonText } from './styled';
import { TextButtonProp } from './type';

export function TextButton({ style, titleStyle, title, onPress = () => {} }: TextButtonProp) {
  return (
    <StyledButton style={style} activeOpacity={0.7} onPress={onPress}>
      <StyledButtonText style={titleStyle}>{title}</StyledButtonText>
    </StyledButton>
  );
}
