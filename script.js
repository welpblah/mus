document.addEventListener('DOMContentLoaded', function() {
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audio');

    playlist.addEventListener('click', function(event) {
        // Check if the clicked element is an anchor tag
        if (event.target.tagName === 'A') {
            event.preventDefault();  // Prevent navigating to the link

            // Change the audio source
            const newSource = event.target.href;
            audioPlayer.src = newSource;

            // Play the new track
            audioPlayer.play();

            // Update the active class for the playlist
            const currentActive = playlist.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            event.target.parentElement.classList.add('active');
        }
    });
});

function currentSlide(n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
  }
