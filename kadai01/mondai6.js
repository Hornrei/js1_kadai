console.log('問題6 オブジェクト');

/*
TODO: ECサイトの商品のオブジェクトを作ってみる

属性
・属性
・商品名
・値段
・商品カテゴリー

*/

const enpitu = {
  id: 0,
  name: '鉛筆',
  price: 100,
  category: '文房具'

}

// TODO: 商品カテゴリーの属性を追加しよう
const eraser = {
  id: 1,
  name: '消しゴム',
  price: 100,
  category: '文房具'
}


// TODO: 鉛筆オブジェクトを完成させよう
const pencil = {
  id: 2,
  name: '鉛筆2',
  price: 110,
  category: '文房具'
}

// TODO: ノートオブジェクトを完成させよう
const note = {
  id: 3,
  name: 'ノート',
  price: 120,
  category: '文房具'
}

// 購入履歴
const orders = [
  // ユーザーID 1 の人が 商品ID 1 の商品を 2個買った
  {
    user: 1,
    product: 1,
    amount: 2,
  },
  {
    user: 1,
    product: 2,
    amount: 1,
  },
  {
    user: 2,
    product: 3,
    amount: 1,
  },
  {
    user: 2,
    product: 2,
    amount: 3,
  },
  {
    user: 3,
    product: 1,
    amount: 5,
  }
]

// TODO: 購入履歴から消しゴムが何個売れたか計算しよう

// ↓難しい…

// TODO: ユーザー 1 の人が支払った金額を計算しよう

// TODO: 全ての売上を計算しよう
