import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerRemoveByGroup(
  playerName: string,
  group: string
): Promise<PlayerStorageDTO[]> {
  try {
    const players = await playersGetByGroup(group);

    const filteredPlayers = players.filter(
      (player) => player.name !== playerName
    );

    const filteredPlayersStorage = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      filteredPlayersStorage
    );

    return filteredPlayers;
  } catch (error) {
    throw error;
  }
}
