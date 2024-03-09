import {date_object} from "./date_object";
import {print_if_date} from "./print_if_date";

/**
 * Formats a date object in 'MM/DD/YYYY' format, or returns an empty string ("") if invalid/empty/NAN date is passed
 * @param {string | Date | undefined | null} date
 * @param {string | ""} replacer
 * @returns {string | ""}
 */
export function date_string_or_blank(
  date: string | Date |number | undefined | null,
  replacer: string | "" = ""
): string | "" {
  if (date === undefined || date === null) {
    return replacer;
  }
  const date_obj = date_object(date);
  if (date_obj === undefined || date_obj === null) {
    return replacer;
  }

  const as_date_only: string = print_if_date(date_obj);
  if (as_date_only !== undefined) {
    return as_date_only;
  }

  return date_obj.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

