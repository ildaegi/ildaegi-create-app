import styled from 'styled-components/native';
import { DefaultTextProp } from './type';

import Color from '../../constants/color';

export const StyledText = styled.Text<DefaultTextProp>`
  letter-spacing: -0.2px;
  font-size: 16px;
  font-weight: normal;
  color: ${Color.black};
`;

export const StyledTitle = styled.Text<DefaultTextProp>`
  letter-spacing: -0.2px;
  font-size: 26px;
  font-weight: bold;
  color: ${Color.black};
`;
