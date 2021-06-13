// 2-1. ジェネリクス
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

// 型引数Tとする
// Tは渡される配列の要素の型を想定している。
// 第1引数の型はT[]となる。
// 第2引数の型は配列の要素を1つ受け取って真偽値を返す関数なので、
// 型は(elm: T) => booleanとなる。
function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], (str) => str.length >= 4);

// エラー例
myFilter(['foo', 'hoge', 'bar'], (num) => num % 2 === 0);
myFilter([1, 2, 3, 4, 5], (str) => str.length >= 4);

export {};
