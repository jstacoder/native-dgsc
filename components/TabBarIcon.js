import React from 'react';
import { Icon } from 'native-base'

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      active={false}
      name={props.name}
      type={props.type || 'Ionicons'}      
      style={{ 
        ...(props.style|| {}),
        marginBottom: -3, 
        color: props.color ? props.color : props.focused ? 
          Colors.tabIconSelected : 
          Colors.tabIconDefault,
        fontSize: props.size || 27,
        }}
    />
  );
}
