import { GAMES_CATEGORY_LIST } from '../config/constants';

const templateGame = ({ title, platform, metacritic }, index) => ({
  name: title,
  platform,
  metacritic,
  key: `${title}-${platform}-${index}`,
})

const templateCategory = ({ data, category }, index) => ({
  name: category,
  key: `${category}-${index}`,
  data: data.map(templateGame)
})

export const getGamesCategory = () => GAMES_CATEGORY_LIST.map(templateCategory);

export const templateInfo = (label, value) => [`${label}:`, value].join(' ');
