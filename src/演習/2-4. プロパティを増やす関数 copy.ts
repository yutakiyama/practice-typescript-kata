// 2-4. プロパティを増やす関数
// @see https://qiita.com/uhyo/items/0e7821ce494024c98da5#2-4-%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%92%E5%A2%97%E3%82%84%E3%81%99%E9%96%A2%E6%95%B0


// 返り値 T & { id: string } はインターセクション型
// でオブジェクトに新しいプロパティを増やしたいときの典型的な方法
function giveId<T>(obj: T): T & { id: string } {
  const id = "本当はランダムがいいけどここではただの文字列";
  return {
    ...obj,
    id
  };
}

// 使用例
const obj1: {
  id: string;
  foo: number;
} = giveId({ foo: 123 });
const obj2: {
  id: string;
  num: number;
  hoge: boolean;
} = giveId({
  num: 0,
  hoge: true
});

// エラー例
const obj3: {
  id: string;
  piyo: string;
} = giveId({
  foo: "bar"
});

export {};
