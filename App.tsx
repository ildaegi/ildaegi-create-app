import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';

import Socket from './src/utils/socket';

import Router from './src/routers/Router';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Socket.init();
    console.log('connect!', Socket.instance?.connected);
    Socket.instance.onAny((...props) => console.log('on', { props }));
    Socket.instance.on('connect_error', (err) => {
      console.log('connect_error!!', err.name, err.message);
    });

    // return () => Socket.disconnect();
  }, []);

  return (
    <RecoilRoot>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Router />
      </SafeAreaView>
    </RecoilRoot>
  );
};
