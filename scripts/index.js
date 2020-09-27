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

const checkZone = (offset) => {

  const sections = document.querySelectorAll('.section')
  Array.from(sections, (element, index) => {
    const top = element.offsetTop
    const elementBottom = top + element.clientHeight
    let hash

    if(offset >= top && offset < elementBottom) { 
      if(offset < window.innerHeight * 2 + (window.innerHeight * 0.4) - 1) {
        hash = element.getAttribute('id')
        location.hash = hash
      }
      else {
        if(element.nextElementSibling != null) {
          hash = element.nextElementSibling.getAttribute('id')
          location.hash = hash
        }
      }
    }
  })
  
}

checkZone(0)

// const fullPage = document.getElementById('page')
// fullPage.addEventListener('scroll', e => {
//   checkZone(e.target.scrollTop)
// })

const arrowDown = document.querySelector('#arrow-down')
arrowDown.addEventListener('click', () => {
  location.href = "#ladrillo"
  setTimeout(checkZone, 2000)
})

const processArrows = document.querySelectorAll('.arrow')
Array.from(processArrows, arrow => {
  arrow.addEventListener('click', e => {
    const allProcess = document.querySelectorAll('#us .u')
    const currentIndex = Array.from(allProcess).indexOf(document.querySelector('.active'))
    const currentProc = allProcess[currentIndex]
    const t = e.target
    if(t.classList.contains('prev') && currentIndex > 0) {
      currentProc.classList.remove('active')
      currentProc.previousElementSibling.classList.remove('pass')
      currentProc.previousElementSibling.classList.add('active')
      processArrows[1].classList.remove('disabled')
      if(currentIndex == 1) {
        processArrows[0].classList.add('disabled')
      }
    }
    else if(t.classList.contains('next') && currentIndex < allProcess.length - 1) {
      currentProc.classList.remove('active')
      currentProc.classList.add('pass')
      currentProc.nextElementSibling.classList.add('active')
      processArrows[0].classList.remove('disabled')
      if(currentIndex == allProcess.length - 2) {
        processArrows[1].classList.add('disabled')
      }
    }
  })
})

menu = () => {
  const button = document.getElementById('menu')
  button.addEventListener('click', e => {
    const submenu = button.querySelector('.submenu')
    console.log(submenu)
    if(button.classList.contains('open')) {
      button.classList.remove('open')
      submenu.style.height = '0'
      submenu.style.display = 'none'
    }
    else {
      button.classList.add('open')
      setTimeout(() => {
        submenu.style.display = 'block'
        submenu.style.height = 'auto'
      }, 250)
    }
  })
}

menu()
