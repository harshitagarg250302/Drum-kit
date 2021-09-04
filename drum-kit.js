for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var sound_char=this.innerHTML;
    makeSound(sound_char);
    addAnimation(sound_char);
  });
}
document.addEventListener("keypress",function(event){
  var value=event.key;
  makeSound(value);
  addAnimation(value);
});
function makeSound(value)
{
  switch (value) {
    case "w":
      handleclick('sounds/tom-1.mp3');
      break;
      case "a":
        handleclick('sounds/tom-3.mp3');
        break;
      case "s":
        handleclick('sounds/tom-2.mp3');
        break;
      case "d":
        handleclick('sounds/tom-4.mp3');
        break;
      case "j":
        handleclick('sounds/crash.mp3');
        break;
      case "l":
        handleclick('sounds/kick-bass.mp3');
        break;
        case "k":
          handleclick('sounds/snare.mp3');
          break;

    default:

  }
}

function addAnimation(key)
{
  var value=document.querySelector("."+key);
  value.classList.add("pressed");
  setTimeout(function(){ value.classList.remove("pressed"); }, 100);

}


function handleclick(file_name)
{
  var aud=new Audio(file_name);
  aud.play();
}
