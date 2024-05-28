var iframe = document.getElementById("linkmenu");
export function framedebug(source) {
  console.clear()
  //regex
  const currentSource = iframe.src;
  const regex = new RegExp(source);
  const result = regex.test(currentSource) ? true : false

  console.log("Current value of linkmenu: "+currentSource);
  console.log("Current value of Regex: "+regex);
  console.log("Frame is in Regex?: "+result);
}

export function frameswitcher(source){
  //regex
  const currentSource = iframe.src;
  const regex = new RegExp(source);
  const result = regex.test(currentSource) ? true : false

  if (!regex.test(currentSource)) {
    iframe.src = source;
    console.log(source +" sent to " + iframe);
  }else{
    console.log(source + " is already main.")
    }
}
