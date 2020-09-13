const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photoArray = [];

const count = 10;

const apiKey = "6A_l67ftoo3lNJ46gZKL9PcffvAn5SxLCwib7bcufOU";
const apiUrl = `https://api.unsplash.com/photos/random/?
client_id=${apiKey}&count=${count}`;

function imageLoaded() {
  //console.log("image loaded");
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
  console.log(ready);
}
function setAttributes(element, attributes) {
  for (key in attributes) {
    //console.log(key);
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photoArray.length;
  //console.log(photoArray);
  photoArray.forEach((photo) => {
    //console.log(photo);
    const item = document.createElement("a");

    setAttributes(item, { href: photo.links.html, target: "_blank" });

    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhtos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    //console.log(photoArray);
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    console.log("load more");
    getPhtos();
  }
});

getPhtos();
