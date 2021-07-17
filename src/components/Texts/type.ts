import { StyleProp, TextStyle } from 'react-native';

export interface DefaultTextProp {
  children?: string;
  style?: StyleProp<TextStyle>;
  fixed?: boolean;
}
