const preloadingAnimations = () => {
  const logoPreloading = document.querySelector('#pre-loading .logo img')
  setTimeout(() => logoPreloading.style.animation = 'logoPreloading forwards 0.7s', 250)
  
  const textPreloading = document.querySelector('#pre-loading .text span')
  setTimeout(() => textPreloading.style.animation = 'textPreloading forwards 0.7s', 950)
}

const slidesAnimation = () => {
  const slides = document.getElementById('slides')
  const preLoading = document.getElementById('pre-loading')
  const page = document.getElementById('page')
  const menu = document.getElementById('menu')
  const contact = document.getElementById('contact')
  
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
      slides.style.backgroundColor = '#478bd2'
      preLoading.style.display = 'none'
      setTimeout(() => {
        text2.style.animation = 'textOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        text3.style.animation = 'textIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        image3.style.animation = 'imageIn forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
        slides.style.backgroundColor = '#fdfdfd'
        setTimeout(() => {
          image1.style.animation = 'imageOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
          image2.style.animation = 'imageOut forwards 0.3s cubic-bezier(.5,.1,.5,.9)'
          page.style.transform = 'translateY(0)'
          setTimeout(() => {
            menu.style.transform = 'translateX(0)'
            contact.style.opacity = '1'
          }, 1200)
          bannersAnimation()
        }, 2000)
      }, 2000)
    }, 2700)
  }, 2000)
}

if(screen.orientation.type.includes('landscape') && window.innerWidth >= 700) {
  preloadingAnimations()
  slidesAnimation()
}

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

if(window.innerWidth <= 600 || (screen.orientation.type.includes('landscape') && window.innerHeight <= 600) || screen.orientation.type.includes('portrait')) {
  const page = document.getElementById('page')
  const menuB = document.getElementById('menu')
  const contactB = document.getElementById('contact')
  page.style.transform = 'translateY(0)'
  page.style.transition = '0s'
  menuB.style.transform = 'translateX(0)'
  contactB.style.opacity = '1'
  bannersAnimation()
}

setColorContactButton = (offset) => {
  const page = document.getElementById('page')
  const banners = page.querySelector('#banners').offsetTop
  const us = page.querySelector('#us').offsetTop
  const process = page.querySelector('#process').offsetTop
  const ladrillo = page.querySelector('#ladrillo').offsetTop
  const proc1 = page.querySelector('#proc1').offsetTop

  if(offset >= proc1 - 5) { document.querySelector('#contact').classList.remove('black') }
  else if(offset >= process - 5) { document.querySelector('#contact').classList.add('black') }
  else if(offset >= us - 5) { document.querySelector('#contact').classList.remove('black') }
  else if(offset >= ladrillo - 5) { document.querySelector('#contact').classList.add('black') }
  else if(offset >= banners - 5) { document.querySelector('#contact').classList.remove('black') }
}

setColorContactButton(0)

const fullPage = document.getElementById('page')
fullPage.addEventListener('scroll', e => {

  setColorContactButton(e.target.scrollTop)
  
})

const arrowDown = document.querySelector('#arrow-down')
arrowDown.addEventListener('click', () => {
  location.href = "#projects"
})

const videoArrows = document.querySelectorAll('#video .arrow')
Array.from(videoArrows, arrow => {
  arrow.addEventListener('click', e => {
    const allProjects = document.querySelectorAll('#video .project')
    const currentIndexV = Array.from(allProjects).indexOf(document.querySelector('#video .active'))
    const currentProject = allProjects[currentIndexV]
    const t2 = e.target
    if(t2.classList.contains('prev') && currentIndexV > 0) {
      currentProject.classList.remove('active')
      currentProject.previousElementSibling.classList.remove('pass')
      currentProject.previousElementSibling.classList.add('active')
      videoArrows[1].classList.remove('disabled')
      if(currentIndexV == 1) {
        videoArrows[0].classList.add('disabled')
      }
    }
    else if(t2.classList.contains('next') && currentIndexV < allProjects.length - 1) {
      currentProject.classList.remove('active')
      currentProject.classList.add('pass')
      currentProject.nextElementSibling.classList.add('active')
      videoArrows[0].classList.remove('disabled')
      if(currentIndexV == allProjects.length - 2) {
        videoArrows[1].classList.add('disabled')
      }
    }
  })
})

const processArrows = document.querySelectorAll('#us .arrow')
Array.from(processArrows, arrow => {
  arrow.addEventListener('click', e => {
    const allProcess = document.querySelectorAll('#us .u')
    const currentIndex = Array.from(allProcess).indexOf(document.querySelector('#us .active'))
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