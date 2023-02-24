async function fetchData() {
  const response = await fetch('../data.json')

  const data = await response.json()

  console.log(data)

  data.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('swiper-slide')

    div.innerHTML = `
    <div class="swiper-img">
    <img src="${item.thumbnail.trending.large}" alt="${item.title}">
  </div>
  <div class="content">
    <div class="details">
      <span class="year">${item.year}</span>
      <span class="dot-one">&#8226</span>
      <span class="genre"
        ><img src="assets/icon-category-${item.category}.svg" alt="${item.category}"
      /><p>${item.category}</p></span>
      <span class="dot-two">&#8226</span>
      <span class="rating">${item.rating}</span>
    </div>
    <div class="title">${item.title}</div>
  </div>
  <div class="rating-badge">
    <p class="rating">${item.rating}</p>
  </div>
    `

    document.querySelector('.swiper-wrapper').appendChild(div)

    initSwiper()
  })
}

fetchData()
// Init Swiper ============================================================================================================
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  })
}
