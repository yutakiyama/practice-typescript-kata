// 4-3. unionは嫌だ
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-3-union%E3%81%AF%E5%AB%8C%E3%81%A0
// emitの型引数にユニオン型を渡すことで型チェックを欺ける
// この問題を回避するために、emitの型引数Evをユニオン型にしてエラーを防ぐ

interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

type Spread<Ev, EvOriginal, E> =
  // union distributionを発生させEvユニオンの構成要素に分解する
  Ev extends keyof E
    ? // EvOriginalが、Evの部分型かどうか判定する
      // []で配列型にしているのはEvOriginalに対してunion distributionが発生するのを防ぐため
      // EvOriginalはunion distributionが起きる前のEv
      EvOriginal[] extends Ev[]
      ? E[Ev]
      : never
    : //union distribution発生させる以外の意味をもたないのでnever
      never;

class EventDischarger<E> {
  emit<Ev extends keyof E>(eventName: Ev, payload: Spread<Ev, Ev, E>) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit('start', {
  user: 'user1',
});
ed.emit('stop', {
  user: 'user1',
  after: 3,
});
ed.emit('end', {});

// エラー例
ed.emit<'start' | 'stop'>('stop', {
  user: 'user1',
});
