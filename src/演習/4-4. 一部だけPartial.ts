// 4-4. 一部だけPartial
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-4-%E4%B8%80%E9%83%A8%E3%81%A0%E3%81%91partial
// 全てではなく一部のプロパティのみ省略可能にしたい

type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> & // Kに属するプロパティを持つ部分
  Pick<T, Exclude<keyof T, K>>; // そうじゃない部分で結合

// 元のデータ
interface Data {
  foo: number;
  bar: string;
  baz: string;
}
/*
 * T1は { foo?: number; bar?: string; baz: string } 型
 */
type T1 = PartiallyPartial<Data, 'foo' | 'bar'>;

export {};
