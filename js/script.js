/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
	scrollFunction();
	// scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30) & (intViewportWidth >= 1024)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
        (document.documentElement.scrollTop < 30) & (intViewportWidth >= 1024)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".navbar-nav");

    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            const focusedElement = document.querySelector(".focused");
            if (focusedElement) {
                focusedElement.classList.remove("focused");
            }
            event.target.classList.add("focused");
        });
    });

    const firstItem = document.querySelector(".nav-item");
    firstItem.classList.add("focused");
    firstItem.focus();
});

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        // document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector("#navbarSideCollapse").addEventListener("click", () => {
    document.querySelector("#navbarsExampleDefaultForMobile").classList.toggle("open");
});


/* CARD SLIDER - SWIPER */
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    // direction: getDirection(),
    spaceBetween: 70,
    breakpoints: {
        // when window is <= 767px
        767: {
            slidesPerView: 3,
        },
        // when window is <= 991px
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
    // on: {
    //     resize: function () {
    //         cardSlider.changeDirection(getDirection());
    //     },
    // },
});
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = windowWidth <= 767 ? 'vertical' : 'horizontal';

    return direction;
}

var cardSlider1 = new Swiper(".swiper-join-member", {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: Math.random() * 3*60*1000 + 30000,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    },
})

/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
// function scrollFunctionBTT() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         myButton.style.display = "block";
//     } else {
//         myButton.style.display = "none";
//     }
// }

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // whether animation should happen only once - while scrolling down
});

const wrapElement = document.querySelector('#slider')

setInterval(slidingText, 3000)

function slidingText() {
    // wrapElement.classList.add('animated')
    // setTimeout(loopText, 500)
}

// function loopText() {
//     const firstElement = document.querySelector('#slider div')
//     wrapElement.appendChild(firstElement)
//     wrapElement.classList.remove('animated')
// }




async function loadOwners() {
    try {
        const response = await fetch('json/list-owners.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const owners = await response.json();
        getListOwners(owners);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getListOwners(listOfOwners) {
    var list = document.getElementById('owners');

    list.innerHTML = '';

    for (let item of listOfOwners) {
        var div = `<div class=" ownerr"><div class="member-chuhui">
                            <img  class="img-chu-hui" src="${item.image1}">
                            <div class="d-flex">
                            <div style="border-radius: 25%">
                                <img class="m-2" src="${item.avatar}">
                            </div>

                                <div class="name-chu-hui">
                                 <p style="font-size: 1.5vh" id="name" class="m-2 text-bold">${item.name1}</p>
                                <div>
                                
                                </div>
                                <p style="font-size: 1.5vh; padding-left: 20px" id="role" class="m-2 roles">${item.role1}</p>
                                <div>
          
                                 </div>
                            </div>
                        </div></div>`;
        list.innerHTML += div;
    }
}

document.addEventListener('DOMContentLoaded', loadOwners);


async function loadSuggestions() {
    try {
        const response = await fetch('json/list-suggest.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const suggestions = await response.json();
        getListSuggest(suggestions);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getListSuggest(listSuggest) {
    var list = document.getElementById('suggest');

    list.innerHTML = '';

    for (let item of listSuggest) {
        var div = `<div class="swiper-slide">
                            <div style="padding: 32px" class="container testimonial-card ">
                                <div  class="member d-flex">
                                    <div class="justify-content-lg-start">
                                        <div class="m-3" >
                                            <p>Date Time: ${item.dateTime}</p>
                                            <p>Slogan: ${item.slogan}</p>
                                            <p>Number of Member: ${item.numberOfMember}</p>
                                            <p>Rating: ${item.rating}</p>
                                        </div>

                                        <div class="d-flex">
                                            <div style="border-radius: 25%">
                                                <img class="m-2" src="${item.img}">
                                            </div>
                                            <div>
                                                <p class="m-2 text-bold">Name: ${item.name}</p>
                                                <p class="m-2">Role: ${item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        list.innerHTML += div;
    }

    var cardSlider = new Swiper(".card-slider", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 70,
        breakpoints: {
            430: {
                slidesPerView: 1,
            },
            1023: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
}

document.addEventListener('DOMContentLoaded', loadSuggestions);

async function loadMembers() {
    try {
        const response = await fetch('json/list-member-join.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const members = await response.json();
        getListJoinMember(members);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getListJoinMember(listJoinMember) {
    var list = document.getElementById('join');

    list.innerHTML = '';

    for (let item of listJoinMember) {
        var div = `<div class="members-join d-flex col-xxl-6 swiper-slide">
                        <img class="avatar-member-join" src="${item.img}">
                        <div>
                            <p class="name text-bold">${item.name}</p>
                            <p class="role">${item.role}</p>
                        </div>
                   </div>`;
        list.innerHTML += div;
    }

    var cardSlider1 = new Swiper(".swiper-join-member", {
        direction: 'vertical',
        effect: 'slide',
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        on: {
            slideChangeTransitionEnd: function () {
                const randomDelay = Math.floor(Math.random() * 3000) + 5000;
                setTimeout(() => {
                    const totalSlides = this.slides.length;
                    const randomIndex = Math.floor(Math.random() * totalSlides);
                    this.slideTo(randomIndex);
                }, randomDelay);
            }
        },
        autoplay: {
            delay: 2000,
            reverseDirection: true,
            disableOnInteraction: false,
        },
        breakpoints: {
            540: {
                slidesPerView: 3,
            },
        },
    });
}

document.addEventListener('DOMContentLoaded', loadMembers);


async function loadComments() {
    try {
        const response = await fetch('json/list-comment.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const comments = await response.json();
        getListComment(comments);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getListComment(listComment) {
    var list = document.getElementById('comment');

    list.innerHTML = '';

    for (let item of listComment) {
        var div = `<div class="swiper-slide">
                            <div class="container comment-card  testimonial-card pb-5">
                                <div  class="member d-flex pt-4">
                                    <div class="justify-content-lg-start">
                                        <div class="m-3" >
                                            <p>${item.line1}</p>
                                        </div>

                                        <div class="d-flex">
                                            <div style="border-radius: 25%">
                                                <img class="m-2" src="${item.img}">
                                            </div>
                                            <div>
                                                <p class="m-2 text-bold">${item.name}</p>
                                                <p class="m-2">${item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        list.innerHTML += div;
    }

    var cardSlider = new Swiper(".card-slider", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        zoom: {
            maxRatio: 1.4,
            minRation: 1
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 70,
        breakpoints: {
            430: {
                slidesPerView: 1,
            },
            1023: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
}

document.addEventListener('DOMContentLoaded', loadComments);


var allowRedirect = true;

function redirect() {
    if (allowRedirect) {
        window.open("http://facebook.com", "_blank");
        allowRedirect = false;
        setTimeout(function() {
            allowRedirect = true;
        }, Math.random() * 5 * 60 * 1000 + 10000);
    }
}

document.addEventListener("click", redirect);
