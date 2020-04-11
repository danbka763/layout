let aside = document.getElementById('cards')

var ot = 0;

function loadNewCard(ot) {
  
  // POST запрос к серверу и получение данных
  let request = JSON.parse($.ajax({
    type: "POST",
    url: "https://tochka-market.space/api/getzayavki.php",
    async: false,
    data: '&ot=' + ot + '&do=' + 10,
    cache: false,
    success: function(data) { return data }
  }).responseText);

  // Если вернулся пустой массив - то удаляем элемент, на котором весит
  // событие OnScreen, тем самым - останавливая последующее выполнение скрипта
  // Удаляем скрипты со странички
  if (request.length === 0) {
    console.log('Stop OnScreen!');
    document.getElementById('OS').remove();
    document.getElementById('gettingCards').remove();
    document.getElementById('scriptAJAX').remove();
    return
  }

  // section дополняем элементами, которые вытащили запросом
  for (let i = 0; i < request.length; i++) {
    aside.innerHTML += `
      <aside id="card_${request[i][0]}">
        <div class="img_block"><img src="${request[i][2]}" alt=""></div>
        <div class="text-ad">
          <h3 class="name">${request[i][1]}</h3>
          <h3 class="price">${request[i][4]}  тг.</h3>
          <div class="time-and-number">
            <div class="time">${request[i][3]}</div>
            <div class="number">#${request[i][0]}</div>
          </div>
        </div>
      </aside>
      `
  }

}