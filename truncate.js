function truncateString(str, num) {
  // Clear out that junk in your trunk
  var a;  
  var sliceStr;
  var strLen = str.length;
  if(strLen <= 3 || num < 3) {
    sliceStr = str.slice(0, num) + "...";
    return sliceStr;
  } else if(num >= strLen) {
    return str;
  } else {
    a = num - 3;
    sliceStr = str.slice(0, a) + "...";
    return sliceStr;
  }
  
}

truncateString("Absolutely Longer", 2);
