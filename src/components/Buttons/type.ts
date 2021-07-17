import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface DefaultButtonProp {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: any) => any;
}

export interface ButtonTextProp {
  children?: string | number | JSX.Element;
  fixed?: boolean;
}

export interface TextButtonProp extends DefaultButtonProp {
  titleStyle?: StyleProp<TextStyle>;
  title: string;
}
