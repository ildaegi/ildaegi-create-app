import React, { useEffect } from 'react';
import { View, Alert, Linking } from 'react-native';
// import { useRecoilState } from 'recoil';

import Socket from '../../utils/socket';

// import { CounterAtom } from '../../recoils/atoms/counter';

import Color from '../../constants/color';
import { Title, Text } from '../../components/Texts';
import { TextButton } from '../../components/Buttons';

export type HomeScreenParams = undefined;
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title
        style={{
          color: Color.mainColor,
        }}
      >{`풍등 조작 버튼`}</Title>
      <View style={{ flexDirection: 'row' }}>
        <TextButton
          title={'풍등 띄우기'}
          style={{
            marginTop: 20,
            marginRight: 5,
            height: 60,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 30 }}
          onPress={() => Socket.instance?.emit('animationStart')}
        />
        <TextButton
          title={'밝기 올리기'}
          style={{
            marginTop: 20,
            marginLeft: 5,
            height: 60,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 30 }}
          onPress={() => Socket.instance?.emit('upIntensity')}
        />
      </View>

      <Text
        style={{
          marginTop: 25,
          color: Color.gray,
        }}
      >
        {'아래 링크에서 확인 가능합니다.'}
      </Text>
      <TextButton
        title={'https://outsung.github.io/interactive-art-t2/'}
        style={{
          marginTop: 10,
        }}
        onPress={() => Linking.openURL('https://outsung.github.io/interactive-art-t2/')}
      />
    </View>
  );
}
