// 1-4. 配列の型
// https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

// (arr: Array<number>)でもいける
function sumOfPos(arr: number[]) {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
sumOfPos(123, 456);
sumOfPos([123, 'foobar']);

export {};
