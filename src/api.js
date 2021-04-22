//API Key
const apiKey = "2dcb4bb330124fa6a857f277fffbadd4";

//Base URL
const base_url = "https://api.rawg.io/api/";

//Get Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay() + 18;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

//Upcoming Games
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

//New Games
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game Data
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey}`;

//Game Screenshots
export const gameScreenShotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${apiKey}`;

//Searched Game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&key=${apiKey}&page_size=10`;
