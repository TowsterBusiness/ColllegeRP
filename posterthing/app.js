const link = document.getElementById("link")

let randomLink = Math.floor(Math.random() * 100);
console.log('randomLink: ' + randomLink);

if (randomLink == 2) {
   console.log('randomLinkSent');
   link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
} else if (randomLink == 3) {
   for (let i = 0; i < 10; i++) {
      window.open("https://forms.gle/EENd2ifSfNp6ASdNA", "_blank");
   }
}
