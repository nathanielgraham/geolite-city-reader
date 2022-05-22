import fs from 'fs';
import rd from '@maxmind/geoip2-node';

export default class Reader {
  constructor(dbLocation) {
    this.location = dbLocation;
    this.dbBuffer = fs.readFileSync(this.location);
    this.reader = rd.Reader.openBuffer(this.dbBuffer);    
  }

  lookup(ip) {
    let details;
    try { 
      const response = this.reader.city(ip);
      details = {
        "isoCode": response.country?.isoCode || '',
        "postalCode": response.postal?.code || '',
        "city": response.city?.names?.en || '',
        "timeZone": response.location?.timeZone || '',
        "accuracyRadius": response.location?.accuracyRadius || ''
      };
    } catch(error) {      
      console.log(error);
      details = { "error": error };
    }     
    return details;
  }
}