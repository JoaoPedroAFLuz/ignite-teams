import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  groupNaame: string
) {
  try {
    if (!newPlayer.name.trim()) {
      throw new AppError('O nome do jogador é obrigatório.');
    }

    const storedPlayers = await playersGetByGroup(groupNaame);

    const playerAlreadyExists = storedPlayers.find(
      (player) =>
        player.name === newPlayer.name && player.team === newPlayer.team
    );

    if (playerAlreadyExists) {
      throw new AppError(
        'Já existe um jogador cadastrado com esse nome nesse time.'
      );
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupNaame}`, storage);
  } catch (error) {
    throw error;
  }
}
