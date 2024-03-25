import { Root } from '../types';

export const getData = async (): Promise<Root> => {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  return await res.json();
};
