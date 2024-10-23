function Checkbrowser(Path) {



    LoadImageFromServer(Path);


}


function LoadImageFromServer(PicPath) {

    //    var imgDisplay = $get("imgDisplay");
    //    imgDisplay.src = "images/loader.gif";
    //    imgDisplay.style.cssText = "";
    //    imgDisplay.onload = function () {
    //        imgDisplay.setAttribute("class", "ImageDisplayClass");
    //        imgDisplay.setAttribute("width", "130");
    //        imgDisplay.setAttribute("height", "140");
    //    };
    if (PicPath != null && PicPath != '' && PicPath != 'None') {
        document.getElementById('imgDisplay').src = 'ImageLoader.aspx?Updateid=' + PicPath;
    } else {
        document.getElementById('imgDisplay').src = 'App_Themes/User/Images/BrowseImage.png';
    }
}

////////////////////////////////////////////////////