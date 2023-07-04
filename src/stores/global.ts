import { atom } from 'nanostores';
import { fetchGlobal, fetchProfile } from '../lib/api';


export const globalSettings = atom(null);
export const profileSettings = atom(null);

export const fetchGlobalSettings = async () => {
    try {
      const globalData = await fetchGlobal();
      globalSettings.set(globalData);

      const profileData = await fetchProfile();
      profileSettings.set(profileData);
    } catch (error) {
      console.error('Error fetching global and profile settings:', error);
      // TODO try set fallback/default values in case of an error
      // globalSettings.set(DEFAULT_GLOBAL_SETTINGS);
      // profileSettings.set(DEFAULT_PROFILE_SETTINGS);
    }
  };