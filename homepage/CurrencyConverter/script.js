let select = document.querySelectorAll('.currency'),
input_currency = document.getElementById('input_currency'),
output_currency = document.getElementById('output_currency');





const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?curriencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(entries);
    //alert(`10 GBP = ${data.rates.USD} USD`);
  });   