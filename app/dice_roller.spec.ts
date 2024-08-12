import { AttackResults, DefenceResult, DiceRoller } from "./dice_roller";
import { describe, expect, it } from "@jest/globals";

describe("dice roller", () => {
  const diceRoller = new DiceRoller();

  describe("defence dice", () => {
    describe("white dice", () => {
      it("should have the correct probabilities", () => {
        const totalDefence: DefenceResult = { block: 0, surge: 0, misses: 0 };
        let count = 0;
        while (count < 10000) {
          count++;
          const newRoll = diceRoller.rollDefence(1, "white");
          totalDefence.block = totalDefence.block + newRoll.block;
          totalDefence.surge = totalDefence.surge + newRoll.surge;
          totalDefence.misses = totalDefence.misses + newRoll.misses;
        }
        const blockAvg = (totalDefence.block / count) * 100;
        const surgeAvg = (totalDefence.surge / count) * 100;
        const missesAvg = (totalDefence.misses / count) * 100;

        expect(Math.abs(16.66 - blockAvg)).toBeLessThan(1);
        expect(Math.abs(16.66 - surgeAvg)).toBeLessThan(1);
        expect(Math.abs(66.66 - missesAvg)).toBeLessThan(1);
      });
    });
    describe("red dice", () => {
      it("should have the correct probabilities", () => {
        const totalDefence: DefenceResult = { block: 0, surge: 0, misses: 0 };
        let count = 0;
        while (count < 10000) {
          count++;
          const newRoll = diceRoller.rollDefence(1, "red");
          totalDefence.block = totalDefence.block + newRoll.block;
          totalDefence.surge = totalDefence.surge + newRoll.surge;
          totalDefence.misses = totalDefence.misses + newRoll.misses;
        }
        const blockAvg = (totalDefence.block / count) * 100;
        const surgeAvg = (totalDefence.surge / count) * 100;
        const missesAvg = (totalDefence.misses / count) * 100;

        expect(Math.abs(50.0 - blockAvg)).toBeLessThan(1);
        expect(Math.abs(16.66 - surgeAvg)).toBeLessThan(1);
        expect(Math.abs(33.33 - missesAvg)).toBeLessThan(1);
      });
    });
  });
  describe("attack dice", () => {
    describe("white dice", () => {
      it("should have the correct probabilities", () => {
        const totalDefence: AttackResults = {
          white: { hits: 0, crits: 0, surges: 0, misses: 0 },
          black: { hits: 0, crits: 0, surges: 0, misses: 0 },
          red: { hits: 0, crits: 0, surges: 0, misses: 0 },
        };
        let count = 0;
        while (count < 10000) {
          count++;
          const newRoll = diceRoller.generateAttackResults({
            whiteDice: 1,
            blackDice: 0,
            redDice: 0,
          });
          totalDefence.white.crits =
            totalDefence.white.crits + newRoll.white.crits;
          totalDefence.white.hits =
            totalDefence.white.hits + newRoll.white.hits;
          totalDefence.white.surges =
            totalDefence.white.surges + newRoll.white.surges;
          totalDefence.white.misses =
            totalDefence.white.misses + newRoll.white.misses;
        }
        const critAvg = (totalDefence.white.crits / count) * 100;
        const hitAvg = (totalDefence.white.hits / count) * 100;
        const surgeAvg = (totalDefence.white.surges / count) * 100;
        const missesAvg = (totalDefence.white.misses / count) * 100;

        expect(Math.abs(12.5 - critAvg)).toBeLessThan(1);
        expect(Math.abs(12.5 - hitAvg)).toBeLessThan(1);
        expect(Math.abs(12.5 - surgeAvg)).toBeLessThan(1);
        expect(Math.abs(62.5 - missesAvg)).toBeLessThan(1);
      });
    });
    describe("black dice", () => {
      it("should have the correct probabilities", () => {
        const totalDefence: AttackResults = {
          white: { hits: 0, crits: 0, surges: 0, misses: 0 },
          black: { hits: 0, crits: 0, surges: 0, misses: 0 },
          red: { hits: 0, crits: 0, surges: 0, misses: 0 },
        };
        let count = 0;
        while (count < 10000) {
          count++;
          const newRoll = diceRoller.generateAttackResults({
            whiteDice: 0,
            blackDice: 1,
            redDice: 0,
          });
          totalDefence.black.crits =
            totalDefence.black.crits + newRoll.black.crits;
          totalDefence.black.hits =
            totalDefence.black.hits + newRoll.black.hits;
          totalDefence.black.surges =
            totalDefence.black.surges + newRoll.black.surges;
          totalDefence.black.misses =
            totalDefence.black.misses + newRoll.black.misses;
        }
        const critAvg = (totalDefence.black.crits / count) * 100;
        const hitAvg = (totalDefence.black.hits / count) * 100;
        const surgeAvg = (totalDefence.black.surges / count) * 100;
        const missesAvg = (totalDefence.black.misses / count) * 100;

        expect(Math.abs(12.5 - critAvg)).toBeLessThan(1);
        expect(Math.abs(37.5 - hitAvg)).toBeLessThan(1);
        expect(Math.abs(12.5 - surgeAvg)).toBeLessThan(1);
        expect(Math.abs(37.5 - missesAvg)).toBeLessThan(1);
      });
    });
    describe("red dice", () => {
      it("should have the correct probabilities", () => {
        const totalDefence: AttackResults = {
          white: { hits: 0, crits: 0, surges: 0, misses: 0 },
          black: { hits: 0, crits: 0, surges: 0, misses: 0 },
          red: { hits: 0, crits: 0, surges: 0, misses: 0 },
        };
        let count = 0;
        while (count < 10000) {
          count++;
          const newRoll = diceRoller.generateAttackResults({
            whiteDice: 0,
            blackDice: 0,
            redDice: 1,
          });
          totalDefence.red.crits = totalDefence.red.crits + newRoll.red.crits;
          totalDefence.red.hits = totalDefence.red.hits + newRoll.red.hits;
          totalDefence.red.surges =
            totalDefence.red.surges + newRoll.red.surges;
          totalDefence.red.misses =
            totalDefence.red.misses + newRoll.red.misses;
        }
        const critAvg = (totalDefence.red.crits / count) * 100;
        const hitAvg = (totalDefence.red.hits / count) * 100;
        const surgeAvg = (totalDefence.red.surges / count) * 100;
        const missesAvg = (totalDefence.red.misses / count) * 100;

        expect(Math.abs(12.5 - critAvg)).toBeLessThan(1);
        expect(Math.abs(62.5 - hitAvg)).toBeLessThan(1);
        expect(Math.abs(12.5 - surgeAvg)).toBeLessThan(1);
        expect(Math.abs(12.5 - missesAvg)).toBeLessThan(1);
      });
    });
  });
});
