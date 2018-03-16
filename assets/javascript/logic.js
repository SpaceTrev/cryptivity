var queryURL = "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response[0].price_usd);
    $("#coinPrice").html("Bitcoin Price In USD: " + response[0].price_usd)
  });