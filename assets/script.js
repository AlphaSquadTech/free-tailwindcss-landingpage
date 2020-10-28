
//Animations via locomotive scroll
const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});

ScrollTrigger.create({
    scroller: ".main",
    start: "top+=20% 30%",
    end: "bottom-=30% 40%",
    scrub: 2,
    // markers: true
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();

//

// Function to toggle header menu in mobile view.
function toggleMenu(flag) {
    let value = document.getElementById("menu");
    if (flag) {
        value.classList.remove("hidden");
    } else {
        value.classList.add("hidden");
    }
}

// For testimonials.

var curent = 0;
function getFigures() {
    return document.getElementById("carousel").getElementsByTagName("figure");
}
function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == "visible") {
            figures[i].className = "hidden";
            pointer = i;
            curent = pointer + 1;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = "visible";
}

function movePrev() {
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == "visible") {
            figures[i].className = "hidden";
        }
    }
    if (curent === 0) {
        curent = figures.length - 1;
        figures[curent].className = "visible";
    } else {
        curent = curent - 1;
        figures[curent].className = "visible";
    }
}
