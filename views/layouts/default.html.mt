<!DOCTYPE html>
<html>
  <head>
    %= ctx.mojoFaviconTag()    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>GeoLite2 City Database</title>
    <link rel="stylesheet" href="public/style.css">
  </head>
  <body>
    <%= ctx.content.main %>
    <script src="public/main.js"></script>
  </body>
</html>
