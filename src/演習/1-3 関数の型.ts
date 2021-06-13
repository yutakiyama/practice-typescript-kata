// 1-3. 関数の型
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

// (num: number) => boolean のところが型だよ
type IsPositiveFunc = (num: number) => boolean;

// interfaceでもいける
// interface IsPositiveFunc {
//   (num: number): boolean
// }

const isPositive: IsPositiveFunc = (num: number) => num >= 0;

// 使用例
isPositive(5);

// エラー例
isPositive('foo');
const res: number = isPositive(123);

export {};
