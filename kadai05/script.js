const temperatures = {
  "1月": {
    "average": 5.4,
    "lastYear": 4.9,
  },
  "2月": {
    "average": 6.1,
    "lastYear": 5.2,
  },
  "3月": {
    "average": 9.4,
    "lastYear": 10.9,
  },
  "4月": {
    "average": 14.3,
    "lastYear": 15.3,
  },
  "5月": {
    "average": 18.8,
    "lastYear": 18.8,
  },
  "6月": {
    "average": 21.9,
    "lastYear": 23.0,
  },
  "7月": {
    "average": 25.7,
    "lastYear": 27.4,
  },
  "8月": {
    "average": 26.9,
    "lastYear": 27.5,
  },
  "9月": {
    "average": 23.3,
    "lastYear": 24.4,
  },
  "10月": {
    "average": 18.0,
    "lastYear": 17.2,
  },
  "11月": {
    "average": 12.5,
    "lastYear": 14.5,
  },
  "12月": {
    "average": 7.7,
    "lastYear": 7.5,
  },
};

$(() => {
  const element = $('.months');
  const element2 = $('.average .bar');
  const element3 = $('.lastYear .bar');
  element.change(event => {
    const selectedMonth = $(event.target).find(':selected').val();  
    //event.target => イベントが発生した要素を取得
    //jQueryのオブジェクトにする↑
    //find('selected')↑これの中で選択状態の要素を取得
    //↑これの値を取得

    //オブジェクト空選択された月のオブジェクトを取得する
    const temperature = temperatures[selectedMonth];
    console.log(temperature);

    element2.animate({
      width:`${temperature.average * 10}px`
    });
    $('.lastYear .bar').animate({width:`${temperature.lastYear * 10}px`});
   $('.monthLabel').text(selectedMonth);
   $('.average .temperature').text(temperature.average);
   $('.lastYear .temperature').text(temperature.lastYear);

  })
})



const over20 = (Object.values(temperatures).filter(temperature => temperature.lastYear >= 20));
$('.over20').text(`${over20.length} `)

