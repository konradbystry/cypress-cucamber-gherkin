import date from "date-and-time";

export function getTimeStamp() {
  return date.format(new Date(), "YYYY/MM/DD HH:mm:ss");
}
