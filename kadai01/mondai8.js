console.log('問題8 Array');

const list1 = ['a', 'b', 'c'];

// TODO: list1 の要素を順番に出力する
list1.forEach(function (youso){
  console.log(youso)
});

const list2 = ['近藤', '津留', '吉田'];
// TODO: list2 のそれぞれの要素に「先生」を付けた新しい配列を作成する
const list3 = list2.map(function(youso){
  return youso + '先生';
});
console.log(list3);




const list0 = [
  {
    name: '近藤',
    type: '講師',
  },
  {
    name: '津留',
    type: '教諭',
  },
  {
    name: '佐藤',
    type: '教諭',
  },
];

// TODO: list0 から type が 教諭だけの要素を取り出し新しい配列を作成する

const list4 = ['近藤', '津留', '津留', '近藤', '津留'];
const list5 = list0.filter(youso => youso.type == '教諭');


console.log(list5);



// TODO: 津留先生が何人いるかカウントする

const list6 = list4.filter(youso => youso == '津留')
console.log(list6.length);
