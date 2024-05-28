console.log("navigator.js intialized.");
import {framedebug,frameswitcher}  from "./lib/frameinspect.js";
let source = "";


window.addEventListener("keydown", function name(event) {
  switch(event.key){
    case "1":
      source = "links1.html";
      framedebug(source);
      frameswitcher(source);
      break;
    case "2":
      source = "links2.html";
      framedebug(source);
      frameswitcher(source);
      break;
    case "3":
      source = "links3.html";
      framedebug(source);
      frameswitcher(source);
      break;
    case "4":
      source="links4.html"
      framedebug(source);
      frameswitcher(source);
      break;
    case "h":
      source="help.html";
      framedebug(source);
      frameswitcher(source);
      break;

  }
});
