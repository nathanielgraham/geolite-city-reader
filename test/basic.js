import {app} from '../geolite.js';
import t from 'tap';

t.test('Basics', async t => {
  const ua = await app.newTestUserAgent({tap: t});

  await t.test('Index', async t => {
    // verify the form looks right
    (await ua.getOk('/'))
      .statusIs(200)
      .elementExists('form input[id="ipaddress"]')
      .elementExists('input[type="submit"]')  
      .bodyLike(/main.js/);
    // spot check one record
    (await ua.getOk('/address/128.101.101.101'))
      .statusIs(200)
      .headerLike('Content-Type', 'json')
      .jsonIs({
	 "isoCode":"US",
	 "postalCode":"55423",
	 "city":"Minneapolis",
	 "timeZone":"America/Chicago",
	 "accuracyRadius":20
      })
      .jsonIs('55423', '/postalCode');
  });

  await ua.stop();
});
