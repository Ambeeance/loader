const enabled = process.env.AMBEEANCE === "ENABLED";
const nodeEnv = process.env.NODE_ENV || "";
const prod = nodeEnv.toLowerCase().startsWith("prod");

const IDENTITY = (x) => x;

let ambeeance = IDENTITY;

if (enabled) {
  if (prod) {
    console.warn(
      "You asked to load Ambeeance but we detected a production environment so didn't load.\n *** Use of Ambeeance in production is not advised. ***"
    );
  } else {
    try {
      ambeeance = require("ambeeance-client");
    } catch (ex) {
      console.warn(
        "You asked to load Ambeeance but we could not require it. Did you forget to add it to your dev-dependencies?"
      );
    }
  }
}

module.exports = {
  ambeeance,
};
