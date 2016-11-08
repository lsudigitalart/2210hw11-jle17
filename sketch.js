var properties;
var rowCount;

function preload(){
  properties = loadTable("propinfoshort.csv", "header");
}

function setup(){
  createCanvas(640, 480);

  rowCount = properties.getRowCount();


  background(100);
  noStroke();

  for(var i = 0; i < rowCount; i++){
    var latitude = properties.getNum(i, "lat");
    var longitude = properties.getNum(i, "lng");
    var acres = properties.getNum(i, "LOT AREA MEASUREMENT");
    setXY(latitude, longitude);
      if (acres > 0 && acres < 1){
        fill(72, 255, 248);
      };
      if (acres > 1 && acres < 5){
        fill(64, 229, 223);
      };
      if (acres > 5 && acres < 30){
        fill(54, 191, 186);
      };
      if (acres > 30 && acres < 100){
        fill (49, 173, 169);
      };
      if (acres > 100 && acres < 500){
        fill(36, 127, 124);
      };
      if (acres > 500 && acres < 1000){
        fill(28, 99, 97);
      };
      if (acres > 1000){
        fill(11, 64, 62);
      };

  };


}

function draw(){
  // scale(1.9);
  // translate(width/2-250, height/2+250);
  // rotate(radians(270));



}

function setXY(lat, lng){
  println(lat, lng);
  var x = map(lat, -96, -88, 0, height);
  var y = map(lng, 29, 34, 0, width);
  ellipse(x, y, 0.25);
}
