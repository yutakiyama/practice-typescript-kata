// 4-1. 無い場合はunknown
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-1-%E7%84%A1%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AFunknown
//

// inferの典型的な使用例
// オブジェクトでないものが渡せるとエラーにする
function getFoo<T extends object>(
  obj: T
  // Tがfooプロパティを持つ方かどうか
): T extends { foo: infer E } ? E : unknown {
  // conditional typeが関わっている場合はTSの型推論能力が頼りにならない
  // 存在しないというエラーが出るので
  // 下記とすることでエラー抑制する必要がある
  return (obj as any).foo;
}

// 使用例
// numはnumber型
const num = getFoo({
  foo: 123,
});
// strはstring型
const str = getFoo({
  foo: 'hoge',
  bar: 0,
});
// unkはunknown型
const unk = getFoo({
  hoge: true,
});

// エラー例
getFoo(123);
getFoo(null);

export {};
