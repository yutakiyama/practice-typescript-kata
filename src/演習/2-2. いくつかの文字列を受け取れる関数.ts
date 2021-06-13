// 2-2. いくつかの文字列を受け取れる関数
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

type Speed = 'slow' | 'medium' | 'fast';

function getSpeed(speed: Speed): number {
  switch (speed) {
    case 'slow':
      return 10;
    case 'medium':
      return 50;
    case 'fast':
      return 200;
  }
}

// 使用例
const slowSpeed = getSpeed('slow');
const mediumSpeed = getSpeed('medium');
const fastSpeed = getSpeed('fast');

// エラー例
getSpeed('veryfast');

export {};
