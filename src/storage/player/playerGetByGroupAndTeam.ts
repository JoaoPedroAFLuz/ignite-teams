import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playersGetByGroupAndTeam(
  group: string,
  team: string
): Promise<PlayerStorageDTO[]> {
  try {
    const players = await playersGetByGroup(group);

    return players.filter((player) => player.team === team);
  } catch (error) {
    throw error;
  }
}
