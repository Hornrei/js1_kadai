console.log('問題4 switch');

/*
TODO: 以下のランダムな数値を使用しておみくじを作ろう

ランダムな数値の値によって出力結果を変える
1の場合：大吉
2の場合：中吉
3の場合：小吉
それ以外：凶

（switchを使う）

*/
const randomNumber2 = Math.floor(Math.random() * 5);

console.log(randomNumber2);
switch(randomNumber2){
  case 1:
    console.log('大吉');
  case 2:
    console.log('中吉');
  case 3:
    console.log('小吉');
  default:
    console.log('凶');
}
