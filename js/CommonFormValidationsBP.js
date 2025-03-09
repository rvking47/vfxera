var finalclick;
var finalclick1;
var mediaClickCounterN;
var mediaClickCounterN1;
var mediaClickCounterP;
var mediaClickCounterP1;
var mediaClickCounterE;
var mediaClickCounterE1;
var mediaClickCounterC;

function Namevalidation(NameText) {
  var stdname = NameText.value;
  stdname = stdname.replace(/^\s+|\s+$/g, "");
  if (stdname == "") {
    mediaClickCounterN = 0;
    return false;
  }
  if (stdname != "") {
    var val = NameText.value;
    var len = val.length;
    var chars = "0123456789!@#$%^,&*'<>`~-|.+/;:()_+=?\"\\[]{}";
    var flag = false;

    var name = "";
    for (i = 0; i < len; i++) {
      name = val.charAt(i);
      //alert(abc);
      if (chars.indexOf(name) != -1) {
        mediaClickCounterN1 = 0;
        mediaClickCounterN = 1; //Added Nitin
        return false;
        break;
      }
      //else
      //{
      //  mediaClickCounterN1=1;
      //}
    }
    var val1 = val.charAt(0);
    var val2 = val.charAt(len - 1);
    if (val1 == "'" || val2 == "'") {
      mediaClickCounterN1 = 0;
      mediaClickCounterN = 1; //Added Nitin
      return false;
    }
    //else
    //{
    //  mediaClickCounterN1=1;
    //}
  }
  mediaClickCounterN = 1;
  mediaClickCounterN1 = 1;
  finalVD();
}

function Emailvalidation(txtMail) {
  if (txtMail.value == "") {
    mediaClickCounterE = 0;
    return false;
  } else if (echeck(txtMail.value) == false) {
    //alert("hiii");
    mediaClickCounterE1 = 0;
    mediaClickCounterE = 2; //Added Nitin
    return false;
  }
  //else
  //{
  //}

  mediaClickCounterE = 2;
  mediaClickCounterE1 = 2;
  finalVD();
}

function echeck(str) {
  var at = "@";
  var dot = ".";
  var lat = str.indexOf(at);
  var lstr = str.length;
  var ldot = str.indexOf(dot);
  if (str.indexOf(at) == -1) {
    return false;
  }
  if (
    str.indexOf(at) == -1 ||
    str.indexOf(at) == 0 ||
    str.indexOf(at) == lstr
  ) {
    return false;
  }
  if (
    str.indexOf(dot) == -1 ||
    str.indexOf(dot) == 0 ||
    str.indexOf(dot) == lstr
  ) {
    return false;
  }
  if (str.indexOf(at, lat + 1) != -1) {
    return false;
  }
  if (
    str.substring(lat - 1, lat) == dot ||
    str.substring(lat + 1, lat + 2) == dot
  ) {
    return false;
  }
  if (str.indexOf(dot, lat + 2) == -1) {
    return false;
  }
  if (str.indexOf(" ") != -1) {
    return false;
  }
  return true;
}

function Mobilevalidation(txtMobile) {
  var stdMobile = txtMobile.value;
  if (stdMobile == "") {
    mediaClickCounterP = 0;
    return false;
  }
  //else
  //{
  //}
  if (stdMobile != "") {
    if (
      isNaN(stdMobile) ||
      (stdMobile.charAt(0) != "9" &&
        stdMobile.charAt(0) != "8" &&
        stdMobile.charAt(0) != "7") ||
      stdMobile.length != "10"
    ) {
      //    	    mediaClickCounterP1=0;
      //            return false;
      mediaClickCounterP1 = 0;
      mediaClickCounterP = 3; //Added Nitin
      return false;
    }
    //else
    //{
    //}
  }
  mediaClickCounterP = 3;
  mediaClickCounterP1 = 3;
  finalVD();
  return true;
}

function finalVD() {
  if (mediaClickCounterN != 1) {
    finalclick = 0;
  } else if (mediaClickCounterN1 != 1) {
    finalclick = 0;
  } else if (mediaClickCounterE != 2) {
    finalclick = 0;
  } else if (mediaClickCounterE1 != 2) {
    finalclick = 0;
  } else if (mediaClickCounterP != 3) {
    finalclick = 0;
  } else if (mediaClickCounterP1 != 3) {
    finalclick = 0;
  } else {
    finalclick = 1;
  }
}

function cityvalidate(city) {
  var stdname = city.value;
  stdname = stdname.replace(/^\s+|\s+$/g, "");
  if (stdname == "") {
    mediaClickCounterC = 0;
    return false;
  }
  //    else
  //    {
  //       mediaClickCounterC=1;
  //    }
  if (stdname != "") {
    var val = city.value;
    var len = val.length;
    var chars = "0123456789!@#$%^,&*'<>`~-|.+/;:()_+=?\"\\[]{}";
    var flag = false;

    var name = "";
    for (i = 0; i < len; i++) {
      name = val.charAt(i);
      //alert(abc);
      if (chars.indexOf(name) != -1) {
        mediaClickCounterC1 = 0;
        return false;
        break;
      }
      //	        else
      //	        {
      //              mediaClickCounterC=1;
      //	        }
    }
    var val1 = val.charAt(0);
    var val2 = val.charAt(len - 1);
    if (val1 == "'" || val2 == "'") {
      mediaClickCounterC1 = 0;
      return false;
    }
    //        else
    //        {
    //           mediaClickCounterC=1;
    //        }
  }
  //else
  //{
  //}
  mediaClickCounterC = 1;
  mediaClickCounterC1 = 1;
  finalVD();
}
