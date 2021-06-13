// 3-5. undefinedな引数
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#3-5-undefined%E3%81%AA%E5%BC%95%E6%95%B0
// A型の引数をひとつ受け取ってR型の値を返すような関数の型
// JSでは与えられなかった引数はundefinedが入ることで知られているが、
// f2のようにAがundefined型のときは引数なしでも呼べるようにしたい
// v3のように明示的にundefinedを渡して呼び出すのもOKとしたい
// v4のように、引数がundefined以外のときは引数の省略は許しません

type Func<A, R> =
  // undefined型がA型の部分型であるという条件を表す
  undefined extends A
    ? // undefinedがA型の部分型であるとき
      (arg?: A) => R
    : // そうでないとき
      (arg: A) => R;

// 使用例
const f1: Func<number, number> = (num) => num + 10;
const v1: number = f1(10);

const f2: Func<undefined, number> = () => 0;
const v2: number = f2();
const v3: number = f2(undefined);

const f3: Func<number | undefined, number> = (num) => (num || 0) + 10;
const v4: number = f3(123);
const v5: number = f3();

// エラー例
const v6: number = f1();
