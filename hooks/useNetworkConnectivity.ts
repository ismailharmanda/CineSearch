import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';

export const useNetworkConnectivity = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      onlineManager.setOnline(!!state.isConnected);
    });

    return () => unsubscribe();
  }, []);
};
