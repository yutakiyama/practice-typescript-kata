// 3-2. Partial
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#3-2-partial

// プロパティすべてを省略可能にする
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type T1 = MyPartial<{
  foo: number;
  bar: string;
}>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
  hoge: {
    piyo: number;
  };
}>;

export {};
