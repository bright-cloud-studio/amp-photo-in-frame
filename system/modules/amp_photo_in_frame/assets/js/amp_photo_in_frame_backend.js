document.addEventListener("DOMContentLoaded", function() {

});


// keeps track of the last src we had
var last_src ="";
var last_src_vertical = "";

// every second
var intervalId = window.setInterval(function(){
    
    
    
    // This is for the horizontal frame
    var toAppend = document.getElementById("pal_Photo-in-Frame");
    var img_name = document.querySelector('input[name="frame_image[0][src]"]').value;
    var src = "isotope/" + img_name.charAt(0) + "/" + img_name;
    
    // if we have hiddenField use that, if not do our original process
    if(src != '') {
        if(last_src != src )
        {
            last_src = src;
            var deleteOld = document.getElementById("frame_helper");
            if(deleteOld != null)
                deleteOld.remove();
            toAppend.insertAdjacentHTML("afterend", "<div id='mouse_coords' style='display:none; position:absolute; padding:5px; font-weight:900; background-color:red;color:white; z-index:1000;'><span id='mouse_x'>X</span>, <span id='mouse_y'>Y</span></div><div id='frame_helper' class='clr widget' style='padding-top:5px;'><h3>Frame Coordinate Helper</h3><img id='frame_image' src='" + src + "' style='width: inherit;'><br><p class='tl_help tl_tip'>Click on the Frame Coordinate Helper to get your Clicked Coordinates. Fill them in above for the Frame Top/Left and Frame Bottom/Right.</p><br><p><strong>Clicked Coordinate X:</strong><span id='x_hori'></span></p><p><strong>Clicked Coordinate Y:</strong><span id='y_hori'></span></p></div>");

            var myImg = document.getElementById("frame_image");
            myImg.onmousedown = GetCoordinates;
            myImg.onmousemove = GetMousePOS;
        }
    }
    
    
    
    // This is for the vertical frame
    var toAppend_vertical = document.getElementById("pal_Photo-in-Frame - Vertical");
    var img_name_vertical = document.querySelector('input[name="frame_image_vertical[0][src]"]').value;
    var src_vertical = "isotope/" + img_name_vertical.charAt(0) + "/" + img_name_vertical;
    
    // if we have hiddenField use that, if not do our original process
    if(src_vertical != '') {
        if(last_src_vertical != src_vertical )
        {
            last_src_vertical = src_vertical;
            var deleteOld_vertical = document.getElementById("frame_helper_vertical");
            if(deleteOld_vertical != null)
                deleteOld_vertical.remove();
            toAppend_vertical.insertAdjacentHTML("afterend", "<div id='mouse_coords_vert' style='display:none; position:absolute; padding:5px; font-weight:900; background-color:red;color:white; z-index:1000;'><span id='mouse_x_vert'>X</span>, <span id='mouse_y_vert'>Y</span></div><div id='frame_helper_vertical' class='clr widget' style='padding-top:5px;'><h3>Frame Coordinate Helper - Vertical</h3><img id='frame_image_vertical' src='" + src_vertical + "' style='width: inherit;'><br><p class='tl_help tl_tip'>Click on the Frame Coordinate Helper to get your Clicked Coordinates. Fill them in above for the Frame Top/Left and Frame Bottom/Right.</p><br><p><strong>Clicked Coordinate X:</strong><span id='x_vert'></span></p><p><strong>Clicked Coordinate Y:</strong><span id='y_vert'></span></p></div>");

            var myImg_vertical = document.getElementById("frame_image_vertical");
            myImg_vertical.onmousedown = GetCoordinatesVertical;
            myImg_vertical.onmousemove = GetMousePOSVertical;
        }
    }
        

    
}, 1000);


// Pass in an element then click it to get back your coordinate in percentages between 1-100
function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

// Get coordinates for our normal, horizontal frame
function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  var myImg = document.getElementById("frame_image");
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];

  document.getElementById("x_hori").innerHTML = " " + ((PosX / myImg.width) * 100).toFixed(2);
  document.getElementById("y_hori").innerHTML = " " + ((PosY / myImg.height) * 100).toFixed(2);
  
  document.getElementById("mouse_x").innerHTML = "X: " + ((PosX / myImg.width) * 100).toFixed(2);
  document.getElementById("mouse_y").innerHTML = "Y: " + ((PosY / myImg.height) * 100).toFixed(2);
  
  document.getElementById("mouse_coords").style.display = "initial";
  document.getElementById("mouse_coords").style.top = e.pageY + "px";
  document.getElementById("mouse_coords").style.left = (e.pageX) + "px";
  
}

// Get coordinates for our vertical frame
function GetCoordinatesVertical(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  var myImg = document.getElementById("frame_image_vertical");
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];

  document.getElementById("x_vert").innerHTML = " " + ((PosX / myImg.width) * 100).toFixed(2);
  document.getElementById("y_vert").innerHTML = " " + ((PosY / myImg.height) * 100).toFixed(2);
  
  document.getElementById("mouse_x_vert").innerHTML = "X: " + ((PosX / myImg.width) * 100).toFixed(2);
  document.getElementById("mouse_y_vert").innerHTML = "Y: " + ((PosY / myImg.height) * 100).toFixed(2);
  
  document.getElementById("mouse_coords_vert").style.display = "initial";
  document.getElementById("mouse_coords_vert").style.top = e.pageY + "px";
  document.getElementById("mouse_coords_vert").style.left = (e.pageX) + "px";
  
}


function GetMousePOS(e) {
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  var myImg = document.getElementById("frame_image");
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];

  //document.getElementById("mouse_x").innerHTML = "X: " + ((PosX / myImg.width) * 100).toFixed(2);
  //document.getElementById("mouse_y").innerHTML = "Y: " + ((PosY / myImg.height) * 100).toFixed(2);
  
  //document.getElementById("mouse_coords").style.display = "initial";
  //document.getElementById("mouse_coords").style.top = e.pageY + "px";
  //document.getElementById("mouse_coords").style.left = (e.pageX+15) + "px";
}
function GetMousePOSVertical(e) {
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  var myImg = document.getElementById("frame_image_vertical");
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];

  //document.getElementById("mouse_x_vert").innerHTML = "X: " + ((PosX / myImg.width) * 100).toFixed(2);
  //document.getElementById("mouse_y_vert").innerHTML = "Y: " + ((PosY / myImg.height) * 100).toFixed(2);
  
  //document.getElementById("mouse_coords_vert").style.display = "initial";
  //document.getElementById("mouse_coords_vert").style.top = e.pageY + "px";
  //document.getElementById("mouse_coords_vert").style.left = (e.pageX+15) + "px";
}
