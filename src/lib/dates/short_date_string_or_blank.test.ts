import {expect} from "vitest";
import {short_date_string_or_blank} from "./short_date_string_or_blank";
import {print_if_date} from "./print_if_date";

describe('short_date_string_or_blank', function () {
  describe('invalid date should be undefined if no replacer is defined', function () {
    it('13/32/2000 should be empty string', function () {
      expect(short_date_string_or_blank("13/32/2000")).toEqual("")
    });
    it('undefined value should be empty string', function () {
      expect(short_date_string_or_blank(undefined)).toEqual("")
    });
    it('null value should be empty string', function () {
      expect(short_date_string_or_blank(null)).toEqual("")
    });
  });
  describe('invalid date should be equal to replacer', function () {
    it('should 13/32/2000 should be equal to replacer', function () {
      expect(short_date_string_or_blank("13/32/2000", "***")).toEqual("***")
    });
    it('12/31/2000z00:00:00 should return 12/31/2000', function () {
      expect(short_date_string_or_blank(new Date("12/31/2000z00:00:00"))).toEqual("12/31");
    });
    it('12/31/2000 should return 12/31', function () {
      expect(short_date_string_or_blank(new Date("12/31/2000"))).toEqual("12/31");
    });
  });
});