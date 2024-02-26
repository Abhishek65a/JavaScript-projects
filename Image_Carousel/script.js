var index = 0;

function show_slide(i) {
  index += i;

  var images = document.getElementsByClassName("image");

  for (i = 0; i < images.length; i++) images[i].style.display = "none";

  if (index > images.length - 1) index = 0;

  if (index < 0) index = images.length - 1;

  images[index].style.display = "block";
}

window.addEventListener("onload", show_slide(index));
