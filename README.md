# ambeeance-loader

Attempt to load ambeeance client gracefully

`package.json`

```json
{
  //...
  "dependencies": {
    "ambeeance-loader": "1.0.0"
  },
  "devDependencies": {
    "ambeeance-client": "x.y.z"
  }
}
```

`your_app.js`

```javascript
const { ambeeance } = require("ambeeance-loader")(require);
const config = ambeeance(loadConfig());
```

ambeeance-client will only be `require`d if the environment is not production and `AMBEEANCE=ENABLED` is set in your
environment.
