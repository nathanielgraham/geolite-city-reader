// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const ipaddressInput = document.querySelector('#ipaddress');
const msg = document.querySelector('.msg');
const addressList = document.querySelector('#addresses');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // validate address on both ends
  // javascript regex to validate IPv4 and IPv6 from stackoverflow
  // https://stackoverflow.com/questions/23483855/javascript-regex-to-validate-ipv4-and-ipv6-address-no-hostnames
  var expression = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;

  if (expression.test(ipaddressInput.value)) { 
    const url = encodeURI(`/address/${ipaddressInput.value}`);
    console.log(url);
    const ipAddress = ipaddressInput.value || 'Unknown';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if(data.error) {
        errorMsg(data.error.name)
      } 
      else {
        const li = document.createElement('li');

        li.innerHTML = `
          <p>IP Address: ${ipAddress}</p>
          <p>Country Code: ${data.isoCode}</p>
          <p>Postal Code: ${data.postalCode}</p>
          <p>City Name: ${data.city}</p>
          <p>Time Zone: ${data.timeZone}</p>
          <p>Accuracy Radius: ${data.accuracyRadius}</p>        
        `;
        addressList.appendChild(li);
      }
    }) 
  } 
  else {
    errorMsg('Please enter valid IPv4 or IPv6 address.');
  }
}

function errorMsg(err) {
    msg.classList.add('error');
    msg.innerHTML = err;
    let timer = setTimeout(function() {
      msg.classList.remove('error');
      msg.innerHTML = '';
      clearTimeout(timer);
    }, 3000);
}