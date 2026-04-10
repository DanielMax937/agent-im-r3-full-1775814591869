const fs = require("fs");
const path = require("path");
const {
  getMarkerPath,
  readR3Marker,
  isR3MarkerValid,
  EXPECTED_ID,
} = require("./lib/r3-marker");

const root = path.join(__dirname);

describe("r3 kanban e2e marker", () => {
  test("marker file exists", () => {
    expect(fs.existsSync(getMarkerPath(root))).toBe(true);
  });

  test("marker content matches expected session id", () => {
    expect(readR3Marker(root)).toBe(EXPECTED_ID);
    expect(isR3MarkerValid(root)).toBe(true);
  });
});
