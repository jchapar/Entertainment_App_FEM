// Clear UI============================================================================================================
function clearUI() {
  document.querySelector('.recommended').style.display = 'none'
  document.querySelector('.trending').style.display = 'none'
  document.querySelector('.filter').style.display = 'none'
}

// Filter Movies ============================================================================================================
function showHomeScreen() {
  clearUI()
  // Fetching Trending Data
  fetchTrendingData()
  // Fetching Recommended Data
  fetchRecommendedData()
}

// Filter Movies ============================================================================================================
async function showMovies() {
  clearUI()

  const response = await fetch('./data.json')

  const data = await response.json()

  document.querySelector('.filter').style.display = 'block'

  data.forEach((item) => {
    if (item.category === 'Movie') {
      const div = document.createElement('div')
      div.classList.add('grid-item')

      div.innerHTML = `
      <div class="movie-img">
        <img src="${item.thumbnail.regular.large}" alt="${item.title}" class="movie-poster">
        <div class="bookmark-wrapper">
          <img src="assets/icon-bookmark-empty.svg" alt="Bookmark Empty" class="bookmark">
        </div>
      </div>
      <div class="movie-details">
        <span class="year">${item.year}</span>
        <span class="dot-one">&#8226</span>
        <span class="genre"
          ><img src="assets/icon-category-${item.category}.svg" alt="${item.category}"
        /><p>${item.category}</p></span>
        <span class="dot-two">&#8226</span>
        <span class="rating">${item.rating}</span>
      </div>
      <div class="movie-title">
        <h3>${item.title}</h3>
      </div>
      `

      document.querySelector('.filtered.grid-container').appendChild(div)
    }
  })
}

// Fetching Trending Data============================================================================================================
async function fetchTrendingData() {
  document.querySelector('.trending').style.display = 'block'
  const response = await fetch('./data.json')

  const data = await response.json()

  console.log(data)

  data.forEach((item) => {
    if (item.isTrending === true) {
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
    }
  })
}

// Fetching Recommended Data============================================================================================================
async function fetchRecommendedData() {
  document.querySelector('.recommended').style.display = 'block'
  const response = await fetch('./data.json')

  const data = await response.json()

  console.log(data)

  data.forEach((item) => {
    if (item.isTrending === false) {
      const div = document.createElement('div')
      div.classList.add('grid-item')

      div.innerHTML = `

      <div class="movie-img">
        <img src="${item.thumbnail.regular.large}" alt="${item.title}" class="movie-poster">
        <div class="bookmark-wrapper">
          <img src="assets/icon-bookmark-empty.svg" alt="Bookmark Empty" class="bookmark">
        </div>
      </div>
      <div class="movie-details">
        <span class="year">${item.year}</span>
        <span class="dot-one">&#8226</span>
        <span class="genre"
          ><img src="assets/icon-category-${item.category}.svg" alt="${item.category}"
        /><p>${item.category}</p></span>
        <span class="dot-two">&#8226</span>
        <span class="rating">${item.rating}</span>
      </div>
      <div class="movie-title">
        <h3>${item.title}</h3>
      </div>

      `

      document.querySelector('.grid-container').appendChild(div)
    }
  })
}

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

// Init App ============================================================================================================
function init() {
  // Fetching Trending Data
  fetchTrendingData()
  // Fetching Recommended Data
  fetchRecommendedData()
}

document.addEventListener('DOMContentLoaded', init)
