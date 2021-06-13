// 4-2. プロパティを上書きする関数
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-2-%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%92%E4%B8%8A%E6%9B%B8%E3%81%8D%E3%81%99%E3%82%8B%E9%96%A2%E6%95%B0
// idプロパティを持っている場合はidプロパティを上書きする

function giveId<T>(obj: T): // Excludeは
Pick<T, Exclude<keyof T, 'id'>> & { id: string } {
  const id = '本当はランダムがいいけどここではただの文字列';
  return {
    ...obj,
    id,
  };
}

// 使用例
/*
 * obj1の型は { foo: number; id: string } 型
 */
const obj1 = giveId({ foo: 123 });
/*
 * obj2の型は { num : number; id: string } 型
 */
const obj2 = giveId({
  num: 0,
  id: 100,
});
// obj2のidはstring型なので別の文字列を代入できる
obj2.id = '';
