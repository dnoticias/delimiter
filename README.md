![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Paywall Delimiter Tool for Editor.js

Paywall Delimiter Tool for the [Editor.js](https://editorjs.io).

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.
3. 
## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    "paywall-delimiter": PaywallDelimiter,
  }
  
  ...
});
```

## Config Params

This Tool has no config params

## Output data

This Tool returns empty object.

```json
{
    "type" : "paywall-delimiter",
    "data" : {}
}
```

