// 1-1. 関数に型をつけよう
// https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

function isPositive(num: number): boolean {
  return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
isPositive('123')
const numVar: number = isPositive(-5);

export {};
