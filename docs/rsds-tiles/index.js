/*
 * @copyright 2015 commenthol
 * @license MIT
 */
/* globals L */

function init () {
  var img = [
    8521,  // original width of image
    5442   // original height of image
  ]
  // create the map
  var map = L.map('map', {minZoom: 3})

  // assign map and image dimensions
  var rc = new L.RasterCoords(map, img)
  // set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
  map.setMaxZoom(7)
  // set the view in the middle of the image
  map.setView(rc.unproject([img[0] / 2, img[1] / 2]), 2)

  // the tile layer containing the image generated with gdal2tiles --leaflet ...
  L.tileLayer('tiles/{z}/{x}/{y}.png', {
    noWrap: true,
  }).addTo(map)
}
