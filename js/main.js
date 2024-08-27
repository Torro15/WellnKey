document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav);
  });

  let currentIndex = 0;

  function showSlide(index) {
      const slides = document.querySelector('.about__box-center');
      const thumbnails = document.querySelectorAll('.about__box-left img');
  
      currentIndex = index;
      const offset = -index * 100;
      slides.style.transform = `translateY(${offset}%)`;
  
      thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle('active', i === index);
      });
  }
  
  function openFullscreen(index) {
      const overlay = document.getElementById('fullscreen-overlay');
      const fullscreenImage = document.getElementById('fullscreen-image');
      const images = document.querySelectorAll('.about__box-center img');
  
      fullscreenImage.src = images[index].src;
      overlay.classList.add('active');
  }
  
  function closeFullscreen() {
      const overlay = document.getElementById('fullscreen-overlay');
      overlay.classList.remove('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      const thumbnails = document.querySelectorAll('.about__box-left img');
      thumbnails[currentIndex].classList.add('active');
  });



