// 2-3. 省略可能なプロパティ
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#2-3-%E7%9C%81%E7%95%A5%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3

interface Options {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

// declareは関数や変数の型を中身なしに宣言できる
declare function addEventListener(
  type: string,
  listener?: () => void,
  options?: boolean | Options
): void;

// 使用例
addEventListener('foobar', () => {});
addEventListener('event', () => {}, true);
addEventListener('event2', () => {}, {});
addEventListener('event3', () => {}, {
  capture: true,
  once: false,
});

// エラー例
addEventListener('foobar', () => {}, 'string');
addEventListener('hoge', () => {}, {
  capture: true,
  once: false,
  excess: true,
});

export {};
