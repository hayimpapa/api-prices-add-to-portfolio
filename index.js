
async function getPrice() {
  var api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const response = await fetch(api_url);
  const apiData = await response.json();
  var cryptoData = [];
  
  document.getElementById("crypto").innerHTML =`
    <!-- header row for explanation -->
  <tr>
    <td><b>Cryptocurrency</b></td>
    <td><b>Price (USD)</b></td>
    <td><b>Change % (24h)</b></td>
    <td><b>Holdings</b></td>
    <td><b>Amount to add in USD</b></td>
    <td><b>Action</b></td>
  </tr>
  `
  for (let i=0;i<apiData.length;i++){
    var currentName = apiData[i].name;
    var currentSymbol = apiData[i].symbol;
    var currentPrice = apiData[i].current_price;
    var priceChange24h = apiData[i].price_change_percentage_24h;
    var priceChangeBGColor = "";
    
    if (priceChange24h < 0)     {priceChangeBGColor = "red";}
    else if (priceChange24h >0) {priceChangeBGColor = "green";}
    else priceChangeBGColor = "black";

    document.getElementById("crypto").innerHTML += `
    <tr>
      <td>${currentName} (${currentSymbol})</td>
      <td><b>$ ${currentPrice}</b></td>
      <td><font color=${priceChangeBGColor}>${priceChange24h} % </td>
      <td>0</td>
      <td><input id=${currentSymbol}_add_amount type=text placeholder=\"Buy ${currentSymbol} for USD\"></td>
      <td><input type=button value=Submit id=${currentSymbol}_add_submit></td>
    </tr>`;
    cryptoData.push(currentName, currentSymbol, currentPrice);

  }
console.log(cryptoData);
}

getPrice();
