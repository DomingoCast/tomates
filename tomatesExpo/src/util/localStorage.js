// Utility functions to handle local storage

import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (lkey, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(lkey, jsonValue)
  } catch (e) {
      console.log('[LS ERROR]', e)
      return null
  }
}

export const getData = async (lkey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(lkey)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
      console.log('[LS ERROR]', e)
      return null
  }
}
