const preloadingAnimations = () => {
  const logoPreloading = document.querySelector('#pre-loading .logo img')
  setTimeout(() => logoPreloading.style.animation = 'logoPreloading forwards 0.7s', 250)
  
  const textPreloading = document.querySelector('#pre-loading .text span')
  setTimeout(() => textPreloading.style.animation = 'textPreloading forwards 0.7s', 950)
}

preloadingAnimations()

const slidesAnimation = () => {
  const slides = document.getElementById('slides')
  const fullBox = document.getElementById('full-box')
  const preLoading = document.getElementById('pre-loading')
  const page = document.getElementById('page')
  
  const text1 = slides.querySelector('.text1')
  const text2 = slides.querySelector('.text2')
  const text3 = slides.querySelector('.text3')

  const image1 = slides.querySelector('.image1 .box')
  const image2 = slides.querySelector('.image2 .box')
  const image3 = slides.querySelector('.image3 .box')

  setTimeout(() => {
    slides.style.top = '0'
    setTimeout(() => {
      text1.style.animation = 'textIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
      image1.style.animation = 'imageIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
    }, 600)
    setTimeout(() => {
      text1.style.animation = 'textOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
      text2.style.animation = 'textIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
      image2.style.animation = 'imageIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
      slides.style.backgroundColor = '#fdfdfd'
      preLoading.style.display = 'none'
      setTimeout(() => {
        text2.style.animation = 'textOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        text3.style.animation = 'textIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        image3.style.animation = 'imageIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        slides.style.backgroundColor = '#478bd2'
        setTimeout(() => {
          page.style.display = 'block'
          fullBox.style.top = '100%'
          slides.style.top = '100%'
          image1.style.animation = 'imageOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
          image2.style.animation = 'imageOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
          image3.style.animation = 'imageOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
          setTimeout(() => fullBox.style.display = 'none', 800)
          bannersAnimation()
        }, 2000)
      }, 2000)
    }, 2700)
  }, 2000)
}

slidesAnimation()

const bannersAnimation = () => {

  let currentImage = 0
  const images = [
    document.querySelector('#banners .banner1'),
    document.querySelector('#banners .banner2'),
    document.querySelector('#banners .banner3'),
    document.querySelector('#banners .banner4')
  ]

  let fnInterval = () => {
    currentImage++
    if(currentImage < images.length) {
      images[currentImage].style.opacity = '1'
    }
    else {
      images.forEach((img, index) => {
        if(index != 0) { img.style.opacity = '0' }
      })
      currentImage = 0
      clearInterval(interval)
      interval = setInterval(fnInterval, 5000)
    }
  }
  let interval = setInterval(fnInterval, 5000)
  
}

// Temporal
// const page = document.getElementById('page')
// const fullBox = document.getElementById('full-box')
// fullBox.style.display = 'none'
// page.style.display = 'block'
// bannersAnimation()
// Temporal

const checkZone = () => {
  const viewportHeight = window.innerHeight
  const scrollTop = window.scrollY
  const contactButton = document.querySelector('#page .contact')

  if(scrollTop > viewportHeight) { contactButton.classList.add('black') }
  else { contactButton.classList.remove('black') }
}

checkZone()

window.addEventListener('scroll', e => {
  checkZone()
})

const arrowDown = document.querySelector('#arrow-down')
arrowDown.addEventListener('click', () => {
  const positionAboutUs = document.querySelector('#ladrillo').offsetTop
  window.scroll(0, positionAboutUs)
})