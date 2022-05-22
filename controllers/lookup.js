export default class Controller {
  
  // Render template "lookup/welcome.html.mt"
  async welcome (ctx) {
    await ctx.render();
  }

  // fetch from reader model and render JSON 
  async fetch (ctx) {
    const ip = ctx.stash.ip;
    // error handling done in model
    const response = ctx.models.reader.lookup(ip);   
    await ctx.render({json: response});
  }
}
