let aside = document.getElementById('cards')

let ot = 0;

function loadNewCard(ot) {
  
  let request = JSON.parse($.ajax({
    type: "POST",
    url: "https://tochka-market.space/api/getzayavki.php",
    async: false,
    data: '&ot=' + ot + '&do=' + 10,
    cache: false,
    success: function(data) { return data }
  }).responseText);

  for (let i = 0; i < request.length; i++) {
    aside.innerHTML += `
      <aside id="${request[i][0]}">
        <div class="img_block"><img src="${request[i][2]}" alt=""></div>
        <div class="text-ad">
          <h3>${request[i][1]}</h3>
          <h3 class="price">${request[i][4]}  тг.</h3>
          <div class="time-and-number">
            <div class="time">${request[i][3]}</div>
            <div class="number">#${request[i][0]}</div>
          </div>
        </div>
      </aside>
      `
  }

  ot += 10;

}