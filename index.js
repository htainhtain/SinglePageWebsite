// animating number
function animateNum(){
  $('.fact-no').each(function(){
    var $this = $(this);
    jQuery({ Counter: 0}).animate({ Counter: $this.text()}, {
      duration: 2000,
      easing: 'swing',
      step: function() {
        $this.text(Math.ceil(this.Counter))
      }
    })
  })
}

//callback function for animating number
function callbackFunc(entries, observer){
  entries.forEach(entry => {
    let id = entry.target.getAttribute('id')

    if(id === 'facts' && entry.isIntersecting){
      animateNum()
    }
  })
}

let options = {
  rootMargin: '0px',
  threshold: 0.1
}
let observer = new IntersectionObserver(callbackFunc, options)

const sections = $('section')

sections.each(section => {
  observer.observe(sections[section])
})

//gallayer tab
let galleryFilter = $('.gallery-filter')[0]
let greateworkImg = $('.greatwork-col')

galleryFilter.addEventListener('click', (event) => {
  const filterValue = event.target.getAttribute('data-filter')

  galleryFilter.querySelector('.active').classList.remove('active')

  event.target.classList.add('active')

  event.target.classList.add('active')

  greateworkImg.each(each =>{
    if(greateworkImg[each].classList.contains(filterValue) || filterValue === 'all'){
      greateworkImg[each].classList.remove('hide')
    } else {
      greateworkImg[each].classList.add('hide')
    }
  })
})

//change color of navbar
let navOptions = {
  rootMargin: '0px',
  threshold: 0.8
}

function navIntersecp(entries, navObserver) {

  entries.forEach(entry => {
    let id = entry.target.getAttribute('id')

    if(id === 'development' && entry.isIntersecting){
      $('.navigation nav')[0].classList.remove('bg-dark')
    } else if(id === 'development' && !entry.isIntersecting){
      $('.navigation nav')[0].classList.add('bg-dark')
    }

  })
}

let navObserver = new IntersectionObserver(navIntersecp,navOptions)
sections.each(section => {
  navObserver.observe(sections[section])
})
