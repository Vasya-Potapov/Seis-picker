export function formatTime(time) {
  const timeArray = time.match(/\d{2}/g);

  return `${timeArray[3]}.${timeArray[2]}.${timeArray[1]} ${timeArray[4]}:${timeArray[5]}`;
}
