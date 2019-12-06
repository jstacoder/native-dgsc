import React, { useEffect } from 'react';
import { ExpoConfigView } from '@expo/samples';

import { useFocus } from '../hooks/useFocus'

export default function SettingsScreen() {
  
  useFocus({icon: { color: 'black', name:  'addusergroup', type: 'AntDesign'}})
  
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}
