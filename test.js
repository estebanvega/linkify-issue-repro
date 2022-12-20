import { strict as assert } from "node:assert";
import * as linkifyjsv3 from "linkifyjs-3.0.5";
import * as linkifyjsv4 from "linkifyjs-4.0.2";

const example = "Lorem ipsum mailto:test@testing.se.";

// v3
assert.equal(linkifyjsv3.find(example)[0].type, "email");

// v4
assert.equal(linkifyjsv4.find(example)[0].type, "email"); // fails
