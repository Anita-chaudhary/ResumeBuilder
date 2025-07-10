import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDetails = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving details:", error);
  }
};

export const getDetails = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting details:", error);
  }
};

export const deleteDetails = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting details:", error);
  }
};
