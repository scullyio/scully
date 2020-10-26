# scully-plugin-docs-link-update

This is a helper plugin for people using the scully-content plugin with links to other markdown files
If looks for the `[href]` attribute. If the link in there starts with `#` it will put the full route in front of it, so that links _inside_ the page starts working when it's hosted.
It also looks for relative links that end with `.md` and do not start with `http`. For those links it updates the url so it will contain an url relative to the page the link is on.

## Getting Started

### 1. Install the plugin:

```bash
npm install -D @scullyio/scully-plugin-docs-link-update
```

### 2. Use the plugin:

TODO
