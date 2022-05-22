% view.layout = 'default';
% view.title = 'Geolite2 City Database';

<header>
  <h1>GeoLite2 City Database</h1>
</header>

<section class="container">
  <form id="my-form">
    <h1>IPv4 or IPv6 Lookup</h1>
    <div class="msg"></div>
    <div>
      <label for="ipaddress">IP Address:</label>
      <input type="text" id="ipaddress">
    </div>

    <input class="btn" type="submit" value="Submit">
  </form>

  <ul id="addresses"></ul>
</section>
