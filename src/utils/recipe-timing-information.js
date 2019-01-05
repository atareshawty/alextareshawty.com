const MINUTES_PER_HOUR = 60;

export const formatMinutes = minutes => {
  const hours = Math.floor(minutes / MINUTES_PER_HOUR);
  const newMinutes = minutes % MINUTES_PER_HOUR;
  const minuteString = `${newMinutes} min`;
  let hourString = '';
  if (hours > 0) {
    hourString = `${hours} hr`;
  }

  return `${hourString} ${minuteString}`;
};
