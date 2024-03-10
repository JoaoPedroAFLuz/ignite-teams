import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupName: string) {
  try {
    const groups = await groupsGetAll();

    const filteredGroups = groups.filter((group) => group !== groupName);

    const filteredGroupsStorage = JSON.stringify(filteredGroups);

    await AsyncStorage.setItem(GROUP_COLLECTION, filteredGroupsStorage);
    await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
