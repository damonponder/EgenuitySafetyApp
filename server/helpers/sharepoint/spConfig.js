import { sp } from "@pnp/sp/presets/all";
import { SPFetchClient } from "@pnp/nodejs";

/*********TO DO *********
 *DOCS: https://pnp.github.io/pnpjs/getting-started/
 *REGISTER FOR CLIENT ID/SECRET: https://pnp.github.io/pnpjs/nodejs/sp-fetch-client/
 **************************/

//node config
sp.setup({
  sp: {
    fetchClientFactory: () => {
      return new SPFetchClient("{site url}", "{client id}", "{client secret}");
    }
  }
});

// make a call to SharePoint and log it in the console
sp.web
  .select("Title", "Description")
  .get()
  .then(w => {
    console.log(JSON.stringify(w, null, 4));
  });
