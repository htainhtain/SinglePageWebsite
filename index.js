// Dom
const sectionsDom = $("section");

// observer api
const factsOptions = {
  rootMargin: "0px",
  threshold: 0.1,
};

// animating facts number
function animateNum() {
  $(".fact-no").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });
}

//callback function for animating number
function checkFactsIntersecting(entries, observer) {
  entries.forEach((entry) => {
    let id = entry.target.getAttribute("id");

    if (id === "facts" && entry.isIntersecting) {
      animateNum();
    }
  });
}

const factsIntersectingObserver = new IntersectionObserver(
  checkFactsIntersecting,
  factsOptions
);
sectionsDom.each((section) => {
  factsIntersectingObserver.observe(sectionsDom[section]);
});

//gallayer tab
const galleryFilter = $(".gallery-filter")[0];
const greateworkImg = $(".greatwork-col");

galleryFilter.addEventListener("click", (event) => {
  const filterValue = event.target.getAttribute("data-filter");

  if (filterValue) {
    galleryFilter.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    greateworkImg.each((each) => {
      if (
        greateworkImg[each].classList.contains(filterValue) ||
        filterValue === "all"
      ) {
        greateworkImg[each].classList.remove("hide");
      } else {
        greateworkImg[each].classList.add("hide");
      }
    });
  }
});

//change color of navbar
const navOptions = {
  rootMargin: "0px",
  threshold: 0.8,
};

function navIntersecp(entries, navObserver) {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    if (id === "development" && entry.isIntersecting) {
      $(".navigation nav")[0].classList.remove("bg-dark");
    } else if (id === "development" && !entry.isIntersecting) {
      $(".navigation nav")[0].classList.add("bg-dark");
    }
  });
}

let navObserver = new IntersectionObserver(navIntersecp, navOptions);
sectionsDom.each((section) => {
  navObserver.observe(sectionsDom[section]);
});


//content placeholder