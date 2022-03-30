import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';

import icoomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function icon(props) {
  const [fontLoaded] = useFonts({ icoomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
}
