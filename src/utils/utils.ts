import { format } from "date-fns";

export function getFormateDate(date: string) {
  return format(date, "yyyy-MM-dd");
}
