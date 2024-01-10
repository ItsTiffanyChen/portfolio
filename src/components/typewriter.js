import { reactive } from "vue"

export default (textArr, speed = 100) => {
  let index = 0;
  let textLength = textArr[index].length;
  let text = "";
  let scrollAt = 20;
  let textPos = 0;
  let row = 0;

  const textHTML = reactive({
    html: ""
  })

  function typewriter() {
    text =  '';
    row = Math.max(0, index - scrollAt);

    while ( row < index ) {
      text += textArr[row++] + '<br />';
    }
    textHTML.html = text + textArr[index].substring(0, textPos) + `<span class="caret">|</span>`

    if ( textPos++ == textLength ) {
      textPos = 0;
      index++;

      if ( index != textArr.length ) {
        textLength = textArr[index].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, speed);
    }
  }

  return {
    textHTML,
    typewriter
  }
}

// set up text to print, each item in array is new line
// var aText = new Array(
//   "There are only 10 types of people in the world:", 
//   "Those who understand binary, and those who don't"
//   );
//   var iSpeed = 100; // time delay of print out
//   var iIndex = 0; // start printing array at this posision
//   var iArrLength = aText[0].length; // the length of the text array
//   var iScrollAt = 20; // start scrolling up at this many lines
   
//   var iTextPos = 0; // initialise text position
//   var sContents = ''; // initialise contents variable
//   var iRow; // initialise current row
   
//   function typewriter()
//   {
//    sContents =  ' ';
//    iRow = Math.max(0, iIndex-iScrollAt);
//    var destination = document.getElementById("typedtext");
   
//    while ( iRow < iIndex ) {
//     sContents += aText[iRow++] + '<br />';
//    }
//    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos)
//    if ( iTextPos++ == iArrLength ) {
//     iTextPos = 0;
//     iIndex++;
//     if ( iIndex != aText.length ) {
//      iArrLength = aText[iIndex].length;
//      setTimeout("typewriter()", 500);
//     }
//    } else {
//     setTimeout("typewriter()", iSpeed);
//    }
//   }
  
  
//   typewriter();