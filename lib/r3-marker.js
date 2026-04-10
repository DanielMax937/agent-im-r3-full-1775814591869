const fs = require("fs");
const path = require("path");

const MARKER_BASENAME = ".kanban-e2e-1775814591869-r3.txt";
const EXPECTED_ID = "1775814591869-r3";

function getMarkerPath(rootDir = process.cwd()) {
  return path.join(rootDir, MARKER_BASENAME);
}

function readR3Marker(rootDir) {
  const markerPath = getMarkerPath(rootDir);
  return fs.readFileSync(markerPath, "utf8").trim();
}

function isR3MarkerValid(rootDir) {
  return readR3Marker(rootDir) === EXPECTED_ID;
}

module.exports = {
  MARKER_BASENAME,
  EXPECTED_ID,
  getMarkerPath,
  readR3Marker,
  isR3MarkerValid,
};
