# geolite-city-reader
Geolite City Database Lookup in NodeJS

## Introduction
This is a NodeJS version of an app that originally wrote in Perl.  
Reason: the database reader for Perl has been deprecated.  

## Improvements over Perl version
- Better error handling
- Added testing suite
- Uses supported database reader
- Full MVC application

## Installation
Open geolite.js and point the dbLocation variable to the mmdb file. 

## Starting the server
Issue the following command from the app directory:
```
$ node geolite.js server
```

## Testing
```
$ node test/basic.js
```


