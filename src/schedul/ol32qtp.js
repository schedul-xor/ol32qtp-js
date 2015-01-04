goog.provide('schedul.Ol32Qtp');

goog.require('goog.asserts');
goog.require('ol.TileCoord');



/**
 * @constructor
 */
schedul.Ol32Qtp = function() {};


/**
 * @param {!Array.<!number>} path
 * @param {!number=} opt_limitZ
 * @return {!ol.TileCoord}
 */
schedul.Ol32Qtp.tileForPath = function(path, opt_limitZ) {
  goog.asserts.assertArray(path);

  var x = 0;
  var y = 0;
  var z = goog.isDefAndNotNull(opt_limitZ) ? opt_limitZ : (path.length - 1);
  for (var i = 0; i <= z; i++) {
    x <<= 1;
    y <<= 1;
    var xb = schedul.Ol32Qtp.i2x(path[i]);
    if (xb !== 0) { x++; }
    var yb = schedul.Ol32Qtp.i2y(path[i]);
    if (yb !== 0) { y++; }
  }
  y = -y - 1;
  return new ol.TileCoord(z, x, y);
};


/**
 * x range is from  0 to -2^n-1
 * y range is from  -1 to -2^n
 *
 * @param {!ol.TileCoord} tile
 * @param {!Array.<!number>=} opt_path
 * @param {!Array.<!number>=} opt_coordCache
 * @return {!Array.<!number>}
 */
schedul.Ol32Qtp.pathForTile = function(tile, opt_path, opt_coordCache) {
    goog.asserts.assertInstanceof(tile, ol.TileCoord);

  var path = goog.isDefAndNotNull(opt_path) ? opt_path : [];
  var tilez = tile.z;

  var i, j;
  if (!goog.isDefAndNotNull(opt_coordCache)) {
    opt_coordCache = [];
  }
  for (i = opt_coordCache.length; i < tilez + 1; i++) {
    opt_coordCache.push([]);
  }
  var k = 1 << tilez;
  var xt = tile.x;
  var yt = -tile.y - 1;
  for (i = 0; i <= tilez; i++) {
    opt_coordCache[i][0] = (xt & k);
    opt_coordCache[i][1] = (yt & k);
    k >>= 1;
  }
  path.length = 0;
  for (i = 0; i <= tilez; i++) {
    var coord = opt_coordCache[i];
    var index = schedul.Ol32Qtp.q2i(coord[0], coord[1]);
    path.push(index);
  }

  return path;
};


/**
 * Result vessel will result to values [minX, minY, maxX, maxY].
 *
 * @param {!Array.<!number>}  path
 * @param {!number} zoomLevel
 * @param {!Array.<!number>} resultVessel
 */
schedul.Ol32Qtp.tileOutlineAtZoomLevelPath = function(path, zoomLevel,
    resultVessel) {
  goog.asserts.assertArray(path);
  goog.asserts.assertNumber(zoomLevel);
  goog.asserts.assertArray(resultVessel);

  // Result vessel always should have length 4
  while (resultVessel.length < 4) {
    resultVessel.push(0);
  }
  var originalPathLength = path.length;
  var zoomLevelDelta = zoomLevel - originalPathLength + 1;
  var i;

  // Search min tile
  for (i = 0; i < zoomLevelDelta; i++) {
    path.push(0); // 0 is minimum for both X and Y
  }
  var minTile = schedul.Ol32Qtp.tileForPath(path, zoomLevel);
  path.length = originalPathLength;
  var minTileX = minTile.x;
  var minTileY = minTile.y;
  resultVessel[0] = minTileX;
  resultVessel[2] = minTileY;

  for (i = 0; i < zoomLevelDelta; i++) {
    path.push(3); // 3 is maximum for both X and Y
  }
  var maxTile = schedul.Ol32Qtp.tileForPath(path, zoomLevel);
  path.length = originalPathLength;
  var maxTileX = maxTile.x;
  var maxTileY = maxTile.y;
  resultVessel[1] = maxTileX;
  resultVessel[3] = maxTileY;

  // Sort the order max < min into max > min
  schedul.Ol32Qtp.swapArrayElements_(resultVessel, 0, 1); // minX <-> maxX
  schedul.Ol32Qtp.swapArrayElements_(resultVessel, 2, 3); // minY <-> maxY
};


/**
 * @private
 * @param {!Array.<!number>} arr
 * @param {!number} i
 * @param {!number} j
 */
schedul.Ol32Qtp.swapArrayElements_ = function(arr, i, j) {
  goog.asserts.assertArray(arr);
  goog.asserts.assertNumber(i);
  goog.asserts.assertNumber(j);

  goog.asserts.assert(arr.length > i);
  goog.asserts.assert(arr.length > j);

  if (arr[i] > arr[j]) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {!number}
 */
schedul.Ol32Qtp.q2i = function(x, y) {
  return (x === 0 ? 0 : 1) + (y === 0 ? 0 : 2);
};


/**
 * @param {!number} i
 * @return {!number}
 */
schedul.Ol32Qtp.i2x = function(i) {
  return ((i & 1) === 0) ? 0 : 1;
};


/**
 * @param {!number} i
 * @return {!number}
 */
schedul.Ol32Qtp.i2y = function(i) {
  return ((i & 2) === 0) ? 0 : 1;
};
