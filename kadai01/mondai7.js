console.log('問題7 String');

const text1 = '      山田 太郎      ';

// text1の両側にある空白を取り除く
console.log(text1.trim());


const phone = '090-1234-5678';

// TODO: 電話番号から「-」を取り除く（replaceAll）
console.log(phone.replaceAll('-',''));

const teachers = '近藤 津留 吉田';

// TODO: teachers に 津留先生が含まれているかチェックする
if (teachers.search('津留')) {
  console.log('津留先生発見！');
};

const productId = 'PRODUCT-ABC-0001';

// TODO: productId から ABC の部分だけを取り出す
console.log(productId.substring(8,11));

// TODO: 0001 の部分だけを取り出す
console.log(productId.substring(12,16));
