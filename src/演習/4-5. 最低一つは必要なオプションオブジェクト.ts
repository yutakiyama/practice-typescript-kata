// 4-5. 最低一つは必要なオプションオブジェクト
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-5-%E6%9C%80%E4%BD%8E%E4%B8%80%E3%81%A4%E3%81%AF%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88

type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
  Pick<T, Exclude<keyof T, K>>;

type AtLeastOne<T> = Spread<T, keyof T>;
type Spread<T, K extends keyof T> = K extends keyof T
  ? PartiallyPartial<T, Exclude<keyof T, K>>
  : never;

// 使用例
interface Options {
  foo: number;
  bar: string;
  baz: boolean;
}
function test(options: AtLeastOne<Options>) {
  const { foo, bar, baz } = options;
  // 省略
}
test({
  foo: 123,
  bar: "bar"
});
test({
  baz: true
});

// エラー例
test({});

export { }
