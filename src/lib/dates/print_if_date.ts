export function print_if_date(date_object: Date): string {
  if (
    date_object.getUTCHours() === 0 &&
    date_object.getUTCMinutes() === 0 &&
    date_object.getUTCSeconds() === 0 &&
    date_object.getUTCMilliseconds() === 0
  ) {
    return date_object.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    });
  }
  return undefined;
}