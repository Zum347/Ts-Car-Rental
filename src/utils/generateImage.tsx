import { colors } from '../constants';
import { CarType } from '../types';

export const generateImage = (
  car: CarType,
  angle?: string
): string => {
  const url: URL = new URL('https://cdn.imagin.studio/getimage');
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model.split('/')[0]);
  url.searchParams.append('zoomType', 'fulscreen');

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  const idx = Math.floor(Math.random() * colors.length);

  url.searchParams.append('paintId', colors[idx]);

  return url.href;
};