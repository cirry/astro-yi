import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
export function formatDate(date) {
  if (date) {
    return dayjs(date).utc().format("YYYY-MM-DD")
  } else {
    return ''
  }
}
