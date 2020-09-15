
async function getPrice() {
  var api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const response = await fetch(api_url);
  const apiData = await response.json();
  var cryptoData = [];
  
  document.getElementById("crypto").innerHTML =`
    <!-- header row for explanation -->
  <tr>
    <td><b>Cryptocurrency name</b></td>
    <td><b>Symbol</b></td>
    <td><b>Current price in USD</b></td>
    <td><b>Holdings</b></td>
    <td><b>Amount to add in USD</b></td>
    <td><b>Action</b></td>
  </tr>
  `
  for (let i=0;i<apiData.length;i++){
    var currentName = apiData[i].name;
    var currentSymbol = apiData[i].symbol;
    var currentPrice = apiData[i].current_price;
    document.getElementById("crypto").innerHTML += `
    <tr>
      <td>${currentName}</td>
      <td>${currentSymbol}</td>
      <td>$ ${currentPrice} </td>
      <td>0</td>
      <td><input id=${currentSymbol}_add_amount type=text placeholder=\"Add ${currentSymbol} amount\"></td>
      <td><input type=button value=Submit id=${currentSymbol}_add_submit></td>
    </tr>`;
    cryptoData.push(currentName, currentSymbol, currentPrice);

  }
console.log(cryptoData);
}

getPrice();
