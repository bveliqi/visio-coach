webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }

    var port = webgazer.util.bound(data);

    var xprediction = port.x; //these x coordinates are relative to the viewport 
    var yprediction = port.y; //these y coordinates are relative to the viewport
    // console.log(elapsedTime); //elapsed time is based on time since begin was called
    console.log(xprediction, yprediction)

    var div = document.getElementById('gaze');
    div.style.left = (xprediction - 75) + 'px';
    div.style.top = (yprediction -75) + 'px';

    console.log(div.style.left, div.style.top)

}).begin();

