import React from 'react';
import { StyledText, StyledTitle } from './styled';
import { DefaultTextProp } from './type';

export function Text({ style, children, fixed = false }: DefaultTextProp) {
  return (
    <StyledText style={style} allowFontScaling={!fixed}>
      {children}
    </StyledText>
  );
}

export function Title({ style, children, fixed = false }: DefaultTextProp) {
  return (
    <StyledTitle style={style} allowFontScaling={!fixed}>
      {children}
    </StyledTitle>
  );
}
