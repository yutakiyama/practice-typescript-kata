// 2-5. useStateをdeclareで表現
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#2-5-usestate
// React出てくるuseStateをdeclareで表現する

// State更新関数の引数の型
// 新しいステートを直セス受け取る or
// 古いステートから計算する関数を受け取る
type UseStateArgument<T> = T | ((oldValue: T) => T);
declare function useState<T>(
  initialValue: T
): [T, (updater: UseStateArgument<T>) => void];

// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null);
setAnotherState(100);

// エラー例
setNumState('foobar')

export {};
