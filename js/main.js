//Google Map API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0522, lng: -118.2437 },
    zoom: 8
  });
}



// Scrolling from navbar to the specific section

$('#navbar a, .showcase__btn').on('click', function(e) {
    if(this.has !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {scrollTop: $(hash).offset().top - 100}, 800
        );
        
    }
});


// transparent navbar below the top position

window.addEventListener('scroll', function() {
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})


