export function date_object(
  date: string | Date | undefined | null | number
): Date | undefined {
  let date_object: Date;
  if (date === undefined || date === null) {
    return undefined;
  } else if (typeof date === "number") {
    date_object = new Date(date);
  } else if (typeof date === "string") {
    if (date === "") {
      return undefined;
    }
    date_object = new Date(Date.parse(date));
  } else {
    date_object = date;
  }
  if (isNaN(date_object.getUTCDate())) {
    return undefined;
  }
  return date_object;
}