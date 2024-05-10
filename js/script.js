/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
		(document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
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
    spaceBetween: 70,
    breakpoints: {
        // when window is <= 767px
        767: {
        slidesPerView: 1,
        },
        // when window is <= 991px
        1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
    },
});

var cardSlider1 = new Swiper(".swiper-join-member", {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 70,
    loop: true,
    autoplay: {
        delay: 2000,
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
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // whether animation should happen only once - while scrolling down
});

const wrapElement = document.querySelector('#slider')

setInterval(slidingText, 3000)

function slidingText() {
    wrapElement.classList.add('animated')
    setTimeout(loopText, 500)
}

function loopText() {
    const firstElement = document.querySelector('#slider div')
    wrapElement.appendChild(firstElement)
    wrapElement.classList.remove('animated')
}


let listOfOwners1 = [
    {name1: "Lê Nguyễn Bảo Trâm", role1: "Chủ Hụi", image1: "assets/images/bao-tram.png", avatar: "assets/images/bao-tram-small.png"},
    {name1: "Lê Huỳnh Chí Nhân", role1: "Chủ Hụi", image1: "assets/images/chi-nhan.png", avatar: "assets/images/chi-nhan-small.png"},
    {name1: "Huỳnh Thất", role1: "Chủ Hụi", image1: "assets/images/huynh-that.png", avatar: "assets/images/huynh-that-small.png"},
    {name1: "Văn Nguyễn Hoàng Lâm", role1: "Chủ Hụi", image1: "assets/images/hoang-lam.png", avatar: "assets/images/hoang-lam-small.png"},
    {name1: "Lê Nguyễn Bảo Trâm", role1: "Chủ Hụi", image1: "assets/images/bao-tram.png", avatar: "assets/images/bao-tram-small.png"},
    {name1: "Lê Huỳnh Chí Nhân", role1: "Chủ Hụi", image1: "assets/images/chi-nhan.png", avatar: "assets/images/chi-nhan-small.png"},
    {name1: "Huỳnh Thất", role1: "Chủ Hụi", image1: "assets/images/huynh-that.png", avatar: "assets/images/huynh-that-small.png"},
    {name1: "Văn Nguyễn Hoàng Lâm", role1: "Chủ Hụi", image1: "assets/images/hoang-lam.png", avatar: "assets/images/hoang-lam-small.png"},
];

let listSuggest = [
    {line1: "Bắt đầu hoạt động từ: 24/02/2021", line2: "Chủ trương hội: Hoạt động năng nổ", line3: "Số lượng thành viên: 15", line4: "Mức độ đánh giá: Cực tốt", img: "assets/images/bao-tram-small.png", name: "Lê Nguyễn Bảo Trâm", role: "Chủ hụi"},
    {line1: "Bắt đầu hoạt động từ: 24/02/2021", line2: "Chủ trương hội: Hoạt động năng nổ", line3: "Số lượng thành viên: 15", line4: "Mức độ đánh giá: Cực tốt", img: "assets/images/bao-tram-small.png", name: "Lê Nguyễn Bảo Trâm", role: "Chủ hụi"},
    {line1: "Bắt đầu hoạt động từ: 24/02/2021", line2: "Chủ trương hội: Hoạt động năng nổ", line3: "Số lượng thành viên: 15", line4: "Mức độ đánh giá: Cực tốt", img: "assets/images/bao-tram-small.png", name: "Lê Nguyễn Bảo Trâm", role: "Chủ hụi"},
    {line1: "Bắt đầu hoạt động từ: 24/02/2021", line2: "Chủ trương hội: Hoạt động năng nổ", line3: "Số lượng thành viên: 15", line4: "Mức độ đánh giá: Cực tốt", img: "assets/images/bao-tram-small.png", name: "Lê Nguyễn Bảo Trâm", role: "Chủ hụi"},
];



getListOwners(listOfOwners1);
// getListSuggest(listSuggest);

function getListOwners() {
    var list = document.getElementById('owners')

    for (let item of listOfOwners1) {
        var div = `<div class="col-xxl-3 col-md-6 col-sm-12"><div class="member-chuhui justify-content-lg-start">
                            <img  class="img-chu-hui" src="${item.image1}">
                            <div class="d-flex">
                                <img class="m-2" src="${item.avatar}">
                                <div>
                                    <p id="name" class="m-2 text-bold">${item.name1}</p>
                                    <p id="role" class="m-2 roles">${item.role1}</p>
                                </div>
                            </div>
                        </div></div>`
        list.innerHTML += div
    }
}

// function getListSuggest() {
//     var list = document.getElementById('suggest')
//
//     for (let item of listSuggest) {
//         var div = `<div class="swiper-slide">
//                             <div class="container testimonial-card pb-5 ">
//                                 <div  class="member d-flex pt-4 ">
//                                     <div class="justify-content-lg-start">
//                                         <div class="m-3" >
//                                             <p>${item.line1}</p>
//                                             <p>${item.line2}</p>
//                                             <p>${item.line3}</p>
//                                             <p class="mb-3">${item.line4}</p>
//                                         </div>
//
//                                         <div class="d-flex">
//                                             <img class="m-2" src="${item.img}">
//                                             <div>
//                                                 <p class="m-2 text-bold">${item.name}</p>
//                                                 <p class="m-2">${item.role}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> <!-- end of swiper-slide -->`
//         list.innerHTML += div
//     }
// }

