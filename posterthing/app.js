const link = document.getElementById("link")

let randomLink = Math.floor(Math.random() * 50);
console.log('randomLink: ' + randomLink);

if (randomLink % 10 == 5) {
   console.log('randomLinkSent');
   link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
} else if (randomLink == 10) {
   for (let i = 0; i < 5; i++) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
   }
}
