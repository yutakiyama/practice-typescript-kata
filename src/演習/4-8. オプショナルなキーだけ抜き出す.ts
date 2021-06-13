// 4-7. 条件を満たすキーだけを抜き出す
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-8-%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%81%AA%E3%82%AD%E3%83%BC%E3%81%A0%E3%81%91%E6%8A%9C%E3%81%8D%E5%87%BA%E3%81%99

type PickUndefined<Obj> = {
  [K in keyof Obj]-?: undefined extends Obj[K] ? K : never
}[keyof Obj];

type MapToNever<Obj> = {
  [K in keyof Obj] : never
}

type OptionalKeys<Obj> = PickUndefined<MapToNever<Obj>>

// 使用例
type Data = {
  foo: string;
  bar?: number;
  baz?: boolean;

  hoge: undefined;
  piyo?: undefined;
};

// "bar" | "baz" | "piyo"
type T = OptionalKeys<Data>;

export { }
