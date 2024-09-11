window.addEventListener('scroll', function() {
    let scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let red = 255 - Math.floor(scrolled * 255);
    let green = Math.floor(scrolled * 255);
    document.querySelector('footer').style.backgroundColor = `rgb(${red}, ${green}, 0)`;
  });