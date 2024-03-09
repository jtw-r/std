import {expect} from "vitest";
import {print_if_date} from "./print_if_date";

describe('print_if_date', function () {
  describe('Return undefined', function () {
    it("13/32/2000 00:00:01 should be undefined", () => {
      console.log("!!!!!!!!!")
      expect(print_if_date(new Date("12/31/2000 00:00:00"))).toEqual(undefined);
    });
  });
  describe('Return a date', function () {
    it('12/31/2000 should return 12/31/2000', function () {
      expect(print_if_date(new Date("12/31/2000z00:00:00"))).toEqual("12/31/2000");
    });
  });
});