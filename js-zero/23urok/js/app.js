//find elements
var showPrewBtn = document.getElementById("show-prew-btn");
var showNextBtn = document.getElementById("show-next-btn");
var slideImg = document.getElementById("slide-img");

//subscribe to events
showPrewBtn.addEventListener("click", onShowPrewBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

//create images array

var imagesUrls = [];
imagesUrls.push("https://wallup.net/wp-content/uploads/2019/09/333126-cars-orange-roads-vehicles-supercars-tuning-wheels-racing-sports-cars-porsche-911-luxury-sport-cars-porsche-911-gt3-speed-automobiles-porsche-911-gt3-rs.jpg");
// imagesUrls.push("https://wallpapershome.ru/images/pages/pic_h/9096.jpeg");
// imagesUrls.push("https://img3.goodfon.ru/wallpaper/nbig/9/bb/car-wallpapers-renault-alpine.jpg");
// imagesUrls.push("https://on-desktop.com/wps/2017Auto___Porsche_Orange_sports_car_Porsche_911_GT3_on_the_track_116620_.jpg");

var currentImageIndex = 0;

slideImg.src = imagesUrls[currentImageIndex];
showPrewBtn.disabled = true;

//function definitions
function onShowPrewBtnClick() {
    currentImageIndex--;
    slideImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    //disable prev button if need
    if (currentImageIndex === 0) {
        showPrewBtn.disabled = true;
        // showPrewBtn.style.display = "none";
    }
}


function onShowNextBtnClick() {
    currentImageIndex++;
    slideImg.src = imagesUrls[currentImageIndex];
    showPrewBtn.disabled = false;

    //disable next button if need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
        // showNextBtn.style.display = "none";
    }
}