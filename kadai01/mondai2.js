console.log('問題2 if - else');

/*
  以下のランダムな数値が20以上なら、「20以上です」と出力する（if 使う）
  または10以上、20未満なら「10〜19です」と出力する（else if 使う）
  10未満なら「10未満です」と出力する（else 使う）
*/
const randomNumber = Math.floor(Math.random() * 30);

// TODO: if - else if - else を使う
if(randomNumber >= 20){
  console.log('20以上です')
}else if(randomNumber >= 10){
  console.log('10~19です')
}else{
  console.log('10未満です')
}
