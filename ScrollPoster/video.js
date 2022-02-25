// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
let video = document.getElementById("v0");
const scrollSpeed = 0.03;

document.addEventListener('scroll', function(e) {
    video.src = videoSource(window.scrollY, scrollSpeed);
    console.log(window.scrollY)
    if (window.scrollY > 12000) {
        video.style.position = "absolute";
        video.style.top = "12300px"
    } else {
        video.style.position = "fixed";
        video.style.top = "30%"
    }
});

let videoSource = function(poition, scrollSpeed) {
    let frameEndPos = "355"
    let imageNumberToString = (Math.floor(window.scrollY * scrollSpeed) + 1).toString();
    if (parseInt(imageNumberToString) > 355) 
        imageNumberToString = frameEndPos
    
    while (imageNumberToString.length <= 3) {
        imageNumberToString = '0' + imageNumberToString
    }
    return `videoDump/Ultimate${imageNumberToString}.png`;
}