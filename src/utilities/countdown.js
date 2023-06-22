export const getCountdown = (countdownExpiry) => {
  const now = Date.now();
  const difference = countdownExpiry - now;

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  minutes = String(minutes).length === 1 ? "0" + String(minutes) : minutes;
  seconds = String(seconds).length === 1 ? "0" + String(seconds) : seconds;

  return `${minutes}m ${seconds}s`;
};
