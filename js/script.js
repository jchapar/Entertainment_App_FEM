const POPULAR_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=45683cbb6a8af699dc7727a6b6fdd6f6&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=45683cbb6a8af699dc7727a6b6fdd6f6&query="'
const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=45683cbb6a8af699dc7727a6b6fdd6f6`

const form = document.getElementById('search-form')
const search = document.getElementById('search')
// Scroller div for the trending section
const scroller = document.getElementById('scroller')
// Recommended div for the recommended section
const recommended = document.querySelector('.recommended-container')

// Get Initial Trending List
getMovies(TRENDING_URL)
// Get Initial Popular List
getMovies(POPULAR_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showTrending(data.results)
  showPopular(data.results)
  console.log(data.results)
}

// Getting Trending Movies
function showTrending(movies) {
  scroller.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, media_type, release_date } = movie

    const release_year = new Date().getFullYear(release_date)

    const itemEl = document.createElement('div')
    itemEl.classList.add('item')

    itemEl.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
      class="rounded-lg object-contain h-full w-full"
    />

    <span
      class="bookmark-container absolute h-[32px] w-[32px] rounded-full top-2 right-2 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <svg class="z-20" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          stroke-width="1.5"
          fill="none"
        />
      </svg>
    </span>


    <div
      class="movie-details faded-font absolute flex bottom-7 left-4 text-[12px] space-x-2 md:text-[15px] md:bottom-9"
    >
      <span class="year">${release_year}</span>
      <div class="flex items-center space-x-[2px]">
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
            fill="#FFF"
            opacity=".75"
          />
        </svg>
        <span>${media_type}</span>
      </div>
      <span class="${vote_average}">PG</span>
    </div>


    <div class="movie-title-container absolute z-50 left-4 bottom-2">
      <h3 class="text-white md:text-[24px]">${title}</h3>
    </div>
    `

    scroller.appendChild(itemEl)
  })
}

// Show Popular Movies
function showPopular(movies) {
  recommended.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, media_type, release_date } = movie

    const release_year = new Date().getFullYear(release_date)

    const gridItemEl = document.createElement('div')
    gridItemEl.classList.add('grid-item')

    gridItemEl.innerHTML = `
    <div class="relative mb-2">
                <img
                  src="${IMG_PATH + poster_path}"
                  alt="${title}"
                  class="rounded-lg"
                />
                <!-- Bookmark container -->
                <span
                  class="bookmark-container absolute h-[32px] w-[32px] rounded-full top-2 right-2 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <svg class="z-20" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      stroke="#FFF"
                      stroke-width="1.5"
                      fill="none"
                    />
                  </svg>
                </span>
              </div>
              <!-- Movie Details -->
              <div class="movie-details faded-font flex space-x-2 text-[11px]">
                <span class="year">${release_year}</span>
                <div class="flex items-center space-x-[2px]">
                  <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                  <span>${media_type}</span>
                </div>
                <span class="rating">${vote_average}</span>
              </div>

              <!-- Movie title -->
              <div class="movie-title-container">
                <h3 class="text-white md:text-[24px]">${title}</h3>
              </div>
    `
    recommended.appendChild(gridItemEl)
  })
}
