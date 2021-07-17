import styled from 'styled-components/native';
import { DefaultButtonProp } from './type';

import Color from '../../constants/color';

export const StyledButton = styled.TouchableOpacity<DefaultButtonProp>`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: ${Color.mainColor};
`;

export const StyledButtonText = styled.Text`
  font-size: 16px;
  color: ${Color.white};
`;
