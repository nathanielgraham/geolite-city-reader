import mojo, {yamlConfigPlugin} from '@mojojs/core';
import Reader from './models/reader.js';

export const app = mojo();

app.plugin(yamlConfigPlugin);
app.secrets = app.config.secrets;

// database location on filesystem
const dbLocation = './GeoLite2-City_20220503/GeoLite2-City.mmdb';

// model for interacting with database 
app.models.reader = new Reader(dbLocation);

// everything routed to the lookup controller

app.get('/').to('lookup#welcome');

// ip lookup
app.any(['GET', 'POST'], '/address/#ip').to('lookup#fetch');

app.start();
