// 4-7. 条件を満たすキーだけを抜き出す
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-6-%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E6%8F%8F%E7%94%BB%E3%81%99%E3%82%8B%E9%96%A2%E6%95%B0

type KeysOfType<Obj, Val> = {
  [K in keyof Obj]-?: Obj[K] extends Val ? K : never;
}[keyof Obj];

// 使用例
type Data = {
  foo: string;
  bar: number;
  baz: boolean;

  hoge?: string;
  fuga: string;
  piyo?: number;
};

// "foo" | "fuga"
// ※ "hoge" は string | undefiendなので含まない
type StringKeys = KeysOfType<Data, string>;

function useNumber<Obj>(obj: Obj, key: KeysOfType<Obj, number>) {
  // ヒント: ここはanyを使わざるを得ない
  const num: number = (obj as any)[key];
  return num * 10;
}

declare const data: Data;

// これはOK
useNumber(data, 'bar');
// これは型エラー
useNumber(data, 'baz');

export {};
