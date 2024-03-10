import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playersGetByGroupAndTeam(
  groupName: string,
  teamName: string
): Promise<PlayerStorageDTO[]> {
  try {
    const players = await playersGetByGroup(groupName);

    return players.filter((player) => player.team === teamName);
  } catch (error) {
    throw error;
  }
}
