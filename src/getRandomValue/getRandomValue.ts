import { GetRandomValueError } from "./getRandomValueError";
import { GetSizeRelationshipError } from "./getSizeRelationshipError";

export class GetRandomValue {
  constructor(private minValue: number, private maxValue: number) {}

  getRandom() {
    if (isNaN(this.minValue) || isNaN(this.maxValue)) {
      throw new GetRandomValueError("数字が入力されていません");
    } else if (this.minValue > this.maxValue) {
      throw new GetSizeRelationshipError("小さい数字と大きい数字が逆です。");
    } else {
      return Math.floor(
        Math.random() * (this.maxValue - this.minValue + 1) + this.minValue
      );
    }
  }
}
