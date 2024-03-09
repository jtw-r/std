import { date_string_or_blank } from "./date_string_or_blank";
import {expect} from "vitest";
import {print_if_date} from "./print_if_date";

describe("date_string_or_blank", () => {
  describe('Invalid/Empty dates should be blank', function () {
    it("Empty string should be blank", () => {
      expect(date_string_or_blank("")).toEqual("");
    });
    it("Undefined should be blank", () => {
      expect(date_string_or_blank(undefined)).toEqual("");
    });
    it("Null should be blank", () => {
      expect(date_string_or_blank(null)).toEqual("");
    });
    it("Empty string value should be blank", () => {
      expect(date_string_or_blank("")).toEqual("");
    });
    it("Invalid Date should be blank", () => {
      expect(date_string_or_blank(new Date("Invalid Date"))).toEqual("");
    });
    it("13/32/2000 should be blank", () => {
      expect(date_string_or_blank("13/32/2000")).toEqual("");
    });
  });

  describe('Valid dates should result in a value formatted as MM/DD/YYYY', function () {
    it("4/4/44 should format to 04/04/2044", () => {
      expect(date_string_or_blank("4/4/44")).toEqual("04/04/2044");
    });
    it("1/2/3456 should format to 01/02/3456", () => {
      expect(date_string_or_blank("1/2/1234")).toEqual("01/02/1234");
    });
    it('unix date 1709959948000 should format to 03/08/2024', ()=>{
      expect(date_string_or_blank(1709959948000)).toEqual("03/08/2024")
    });
    it("13/32/2000 00:00:00 should be 12/31/2000", () => {
      expect(date_string_or_blank("12/31/2000 00:00:00")).toEqual("12/31/2000");
    });
    it('12/31/2000z00:00:00 should return 12/31/2000', function () {
      expect(date_string_or_blank(new Date("12/31/2000z00:00:00"))).toEqual("12/31/2000");
    });
  });
});