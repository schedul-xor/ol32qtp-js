require('nclosure').nclosure({additionalDeps: ['deps.js']});
expect = require('expect.js');

goog.require('ol.TileCoord');
goog.require('schedul.Ol32Qtp');

describe('schedul.Ol32Qtp, general', function() {

  // [0] <=> (0,-1,0)
  it('should return path [0] for tile (0,-1,0)', function() {
    var path = [];
    var coordCache = [[]];
      // z,x,y
    var tile = new ol.TileCoord(0, 0, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
     });
  it('should return tile (0,-1,0) for path [0]', function() {
    var tile = schedul.Ol32Qtp.tileForPath([0]);
    expect(tile.x).to.be(0);
    expect(tile.y).to.be(-1);
    expect(tile.z).to.be(0);
     });

  // [1] <=> (1,-1,0)
  it('should return path [1] for tile (1,-1,0)', function() {
    var path = [];
    var coordCache = [[]];
      // z,x,y
    var tile = new ol.TileCoord(0, 1, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(1);
  });
  it('should return tile (1,-1,0) for path [1]', function() {
       var tile = schedul.Ol32Qtp.tileForPath([1]);
    expect(tile.x).to.be(1);
    expect(tile.y).to.be(-1);
    expect(tile.z).to.be(0);
     });

  // [2] <=> (0,-2,0)
  it('should return path [2] for tile (0,-2,0)', function() {
    var path = [];
    var coordCache = [[]];
      // z,x,y
    var tile = new ol.TileCoord(0, 0, -2);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(2);
  });
  it('should return tile (0,-2,0) for path [2]', function() {
       var tile = schedul.Ol32Qtp.tileForPath([2]);
    expect(tile.x).to.be(0);
    expect(tile.y).to.be(-2);
    expect(tile.z).to.be(0);
     });

  // [3] <=> (1,-2,0)
  it('should return path [3] for tile (1,-2,0)', function() {
    var path = [];
    var coordCache = [[]];
      // z,x,y
    var tile = new ol.TileCoord(0, 1, -2);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
  });
  it('should return tile (1,-2,0) for path [3]', function() {
       var tile = schedul.Ol32Qtp.tileForPath([3]);
    expect(tile.x).to.be(1);
    expect(tile.y).to.be(-2);
    expect(tile.z).to.be(0);
  });

  // [0,0] <=> (0,-1,1)
  it('should return path [0,0] for tile (0,-1,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 0, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
    expect(path[1]).to.be(0);
  });
  it('should return tile (0,-1,1) for path [0,0]', function() {
       var tile = schedul.Ol32Qtp.tileForPath([0, 0]);
    expect(tile.x).to.be(0);
    expect(tile.y).to.be(-1);
    expect(tile.z).to.be(1);
     });

  // [0,1] <=> (1,-1,1)
  it('should return path [0,1] for tile (1,-1,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 1, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
    expect(path[1]).to.be(1);
     });

  // [1,0] <=> (2,-1,1)
  it('should return path [1,0] for tile (2,-1,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 2, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(1);
    expect(path[1]).to.be(0);
     });

  // [1,1] <=> (3,-1,1)
  it('should return path [1,1] for tile (3,-1,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 3, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(1);
    expect(path[1]).to.be(1);
     });

  // [1,3] <=> (3,-2,1)
  it('should return path [1,3] for tile (3,-2,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 3, -2);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(1);
    expect(path[1]).to.be(3);
     });

  // [3,1] <=> (3,-3,1)
  it('should return path [3,1] for tile (3,-3,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 3, -3);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
    expect(path[1]).to.be(1);
  });

  // [3,3] <=> (3,-4,1)
  it('should return path [3,3] for tile (3,-4,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 3, -4);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
    expect(path[1]).to.be(3);
     });

  // [3,2] <=> (2,-4,1)
  it('should return path [3,2] for tile (2,-4,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 2, -4);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
    expect(path[1]).to.be(2);
     });

  // [2,3] <=> (1,-4,1)
  it('should return path [2,3] for tile (1,-4,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 1, -4);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(2);
    expect(path[1]).to.be(3);
     });

  // [2,2] <=> (0,-4,1)
  it('should return path [2,2] for tile (0,-4,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 0, -4);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(2);
    expect(path[1]).to.be(2);
     });

  // [2,0] <=> (0,-3,1)
  it('should return path [2,0] for tile (0,-3,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 0, -3);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(2);
    expect(path[1]).to.be(0);
     });

  // [0,2] <=> (0,-2,1)
  it('should return path [0,2] for tile (0,-2,1)', function() {
    var path = [];
    var coordCache = [[], []];
      // z,x,y
    var tile = new ol.TileCoord(1, 0, -2);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
    expect(path[1]).to.be(2);
  });

  // [0,0,0] <=> (0,-1,2)
  it('should return path [0,0,0] for tile (0,-1,2)', function() {
    var path = [];
    var coordCache = [[], [], []];
      // z,x,y
    var tile = new ol.TileCoord(2, 0, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
    expect(path[1]).to.be(0);
    expect(path[2]).to.be(0);
     });
  it('should return tile (0,-1,2) for path [0,0,0]', function() {
       var tile = schedul.Ol32Qtp.tileForPath([0, 0, 0]);
    expect(tile.x).to.be(0);
    expect(tile.y).to.be(-1);
    expect(tile.z).to.be(2);
     });

  // [3,3,3] <=> (7,-8,2)
  it('should return path [3,3,3] for tile (7,-8,2)', function() {
    var path = [];
    var coordCache = [[], [], []];
      // z,x,y
    var tile = new ol.TileCoord(2, 7, -8);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
    expect(path[1]).to.be(3);
    expect(path[2]).to.be(3);
  });
  it('should return tile (7,-8,2) for path [3,3,3]', function() {
    var tile = schedul.Ol32Qtp.tileForPath([3, 3, 3]);
    expect(tile.x).to.be(7);
    expect(tile.y).to.be(-8);
    expect(tile.z).to.be(2);
  });

  // [0,0,0,0] <=> (0,-1,3)
  it('should return path [0,0,0,0] for tile (0,-1,3)', function() {
    var path = [];
    var coordCache = [[], [], [], []];
      // z,x,y
    var tile = new ol.TileCoord(3, 0, -1);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(0);
    expect(path[1]).to.be(0);
    expect(path[2]).to.be(0);
    expect(path[3]).to.be(0);
     });

  // [3,3,3,3] <=> (15,-16,3)
  it('should return path [3,3,3,3] for tile (15,-16,3)', function() {
    var path = [];
    var coordCache = [[], [], [], []];
      // z,x,y
    var tile = new ol.TileCoord(3, 15, -16);
    schedul.Ol32Qtp.pathForTile(tile, path, coordCache);
    expect(path[0]).to.be(3);
    expect(path[1]).to.be(3);
    expect(path[2]).to.be(3);
    expect(path[3]).to.be(3);
  });

  it('should return tileOutline [0](0,-1,0)->[0](0,-1,0)={0,-1,0,-1} for path [0] and zoom level 0', function() {
    var tileOutline = [];
    var path = [0];
       schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 0, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(0);
    expect(tileOutline[1]).to.be(0);
    expect(tileOutline[2]).to.be(-1);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return tileOutline [1](1,-1,0)->[2](1,-1,0)={1,-1,1,-1} for path [1] and zoom level 0', function() {
    var tileOutline = [];
    var path = [1];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 0, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(1);
    expect(tileOutline[1]).to.be(1);
    expect(tileOutline[2]).to.be(-1);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return tileOutline [2](0,-2,0)->[2](0,-2,0)={0,-2,0,-2} for path [2] and zoom level 0', function() {
    var tileOutline = [];
    var path = [2];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 0, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(0);
    expect(tileOutline[1]).to.be(0);
    expect(tileOutline[2]).to.be(-2);
    expect(tileOutline[3]).to.be(-2);
  });
  it('should return tileOutline [0,0](0,-1,1)->[0,3](1,-2,1)={0,-1,1,-2} for path [0] and zoom level 1', function() {
    var tileOutline = [];
    var path = [0];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 1, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(0);
    expect(tileOutline[1]).to.be(1);
    expect(tileOutline[2]).to.be(-2);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return tileOutline [1,0](2,-1,1)->[1,3](3,-2,1)={2,-1,3,-2} for path [1] and zoom level 1', function() {
    var tileOutline = [];
    var path = [1];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 1, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(2);
    expect(tileOutline[1]).to.be(3);
    expect(tileOutline[2]).to.be(-2);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return tileOutline [1,0,0](4,-1,2)->[1,3,3](7,-4,2)={4,-1,7,-4} for path [1] and zoom level 2', function() {
    var tileOutline = [];
    var path = [1];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 2, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(4);
    expect(tileOutline[1]).to.be(7);
    expect(tileOutline[2]).to.be(-4);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return tileOutline [0,0,0](0,-1,2)->[0,3,3](3,-4,2)={0-1,3,-4} for path [0] and zoom level 2', function() {
    var tileOutline = [];
    var path = [0];
    schedul.Ol32Qtp.tileOutlineAtZoomLevelPath(path, 2, tileOutline);
    expect(path.length).to.be(1);
    expect(tileOutline[0]).to.be(0);
    expect(tileOutline[1]).to.be(3);
    expect(tileOutline[2]).to.be(-4);
    expect(tileOutline[3]).to.be(-1);
  });
  it('should return 0 for q2i(0,0)', function() {
    expect(schedul.Ol32Qtp.q2i(0, 0)).to.be(0);
     });
  it('should return 1 for q2i(1,0)', function() {
    expect(schedul.Ol32Qtp.q2i(1, 0)).to.be(1);
  });
  it('should return 2 for q2i(0,1)', function() {
    expect(schedul.Ol32Qtp.q2i(0, 1)).to.be(2);
  });
  it('should return 3 for q2i(1,1)', function() {
    expect(schedul.Ol32Qtp.q2i(1, 1)).to.be(3);
     });

  it('should return x=0,y=0 for 0', function() {
    expect(schedul.Ol32Qtp.i2x(0)).to.be(0);
    expect(schedul.Ol32Qtp.i2y(0)).to.be(0);
  });
  it('should return x=1,y=0 for 1', function() {
    expect(schedul.Ol32Qtp.i2x(1)).to.be(1);
    expect(schedul.Ol32Qtp.i2y(1)).to.be(0);
  });
  it('should return x=0,y=1 for 2', function() {
    expect(schedul.Ol32Qtp.i2x(2)).to.be(0);
    expect(schedul.Ol32Qtp.i2y(2)).to.be(1);
  });
  it('should return x=1,y=1 for 3', function() {
    expect(schedul.Ol32Qtp.i2x(3)).to.be(1);
    expect(schedul.Ol32Qtp.i2y(3)).to.be(1);
  });
});
