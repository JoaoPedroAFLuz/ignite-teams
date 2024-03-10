import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playersGetByGroup(
  groupName: string
): Promise<PlayerStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupName}`
    );

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
