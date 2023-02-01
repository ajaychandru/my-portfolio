window.addEventListener("load", function () {
    console.log("im in");
    location.href = "#head";
});

var textWrapper = document.querySelectorAll('.h1-animation .letters');
var paraText = document.querySelectorAll('.animate');
const image = document.querySelectorAll('.img-anim');

textWrapper.forEach(wrapLetter)
function wrapLetter(textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}




// checking which element with class animate is in view and adding reveal class
if (window.innerWidth > 576) {

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                //unobserve the element
                observer.unobserve(entry.target);
                //anime function
                anime({

                    targets: '.h1-animation .letter',
                    rotateY: [-90, 0],
                    duration: 1000,
                    delay: (el, i) => 40 * i

                });
            }
        });
    });

    textWrapper.forEach(function (element) {
        observer.observe(element);
    });

    // adding animation to paragraph

    const observer2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                //unobserve the element
                observer2.unobserve(entry.target);
                //checking which element is in view
                anime({
                    targets: '.animate',
                    opacity: [0, 1],
                    translateY: [50, 0],

                    easing: 'easeOutExpo',
                    delay: 1250
                });

            }
        });
    });
    // applying observe to each paragraph element
    paraText.forEach(function (element) {
        observer2.observe(element);
    });



    //adding animation to what i do section image

    const observeImage = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                console.log("observing img");
                anime({
                    targets: image,
                    opacity: [0, 1],
                    duration: 3000,
                    easing: 'easeOutQuad',
                });
            }
        });


    });
    image.forEach(function (element) {
        observeImage.observe(element);
    })



}
// apply animation when viewport size is less than 576px
if (window.innerWidth < 576) {

    // Get the image element by its class
    var img = document.querySelectorAll(".carousel-img"); {
        for (var i = 0; i < img.length; i++) {
            switch (i) {
                case 0:
                    img[i].src = "images/tindog-mob.png";
                    break;

                case 1:
                    img[i].src = "images/clipboard-mob.png";
                    break;

                case 2:
                    img[i].src = "images/portfolio-mob.png"
                default:


                    break;
            }
        }
    }



    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.isApplied) {
                anime({
                    targets: entry.target,
                    translateX: [-1000, 0],
                    opacity: [0, 1],
                    duration: 2000,
                    easing: 'easeOutQuad',
                    delay: 100
                });
                entry.target.isApplied = true;
                observer.unobserve(entry.target);
            }
        });
    });
    var elements = document.querySelectorAll('.h1-animation');


    Array.prototype.forEach.call(elements, function (element) {
        element.isApplied = false;
        observer.observe(element);
    });

    var observerP = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.isApplied) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    duration: 2000,
                    easing: 'easeOutQuad',
                    delay: 2000
                });
                entry.target.isApplied = true;
                observerP.unobserve(entry.target);
            }
        });
    });
    var elementsP = document.querySelectorAll('.animate');


    Array.prototype.forEach.call(elementsP, function (element) {
        element.isApplied = false;
        observerP.observe(element);
    });


}

var carouselImg = document.querySelectorAll(".carousel-img");
carouselImg.forEach(function (element, i) {
    element.addEventListener("click", function () {
        switch (i) {
            case 0:
                window.open("https://ajaychandru.github.io/tindog/");
                break;
            case 1:
                window.open("https://ajaychandru.github.io/clipboar-landing-page/");
                break;
            case 2:
                window.open("https://ajaychandru.github.io/developer-portfolio/");
                break;
            default:
                break;
        }
    });
});


const offCanvas = document.querySelector(".offcanvas");
// const toggleButton = document.querySelector("navbar-toggler");
const navBtn = document.querySelectorAll(".nav-btn");
const navLink = document.querySelectorAll(".nav-link");
let isOpen = false;



navBtn.forEach(function (element, i) {
    element.addEventListener("click", function () {
        switch (i) {
            case 0: document.getElementById("about-me").scrollIntoView({ behaviour: 'smooth' });

                setTimeout(function () {

                    document.querySelector(".navbar-toggler").click();

                }, "500");

                break;
            case 1: document.getElementById("my-work").scrollIntoView({ behaviour: 'smooth' });
                setTimeout(function () {
                    document.querySelector(".navbar-toggler").click();
                }, "500");
        }
    });
});
// navLink.addEventListener('click', function() {
//   document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });
// });





