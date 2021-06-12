// 3-1. 配列からMapを作る
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#3-1-%E9%85%8D%E5%88%97%E3%81%8B%E3%82%89map%E3%82%92%E4%BD%9C%E3%82%8B

function mapFromArray<T, K extends keyof T>(
    arr: T[], key: K
  ): Map<T[K], T> {
  const result = new Map();
  for (const obj of arr) {
    result.set(obj[key], obj);
  }
  return result;
}

// 使用例
const data = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Mary Sue" },
  { id: 100, name: "Taro Yamada" }
];
const dataMap = mapFromArray(data, "id");
console.log(dataMap);
/*
dataMapは
Map {
  1 => { id: 1, name: 'John Smith' },
  2 => { id: 2, name: 'Mary Sue' },
  100 => { id: 100, name: 'Taro Yamada' }
}
というMapになる
*/

// エラー例
// mapFromArray(data, "age");

export {};
