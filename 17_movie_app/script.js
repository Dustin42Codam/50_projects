const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=d65b00a9f19bd68dd4959a94e4de017f&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=d65b00a9f19bd68dd4959a94e4de017f&query="'

const TRENDING_URL =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=d65b00a9f19bd68dd4959a94e4de017f'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

showPopularMovies()

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHtml = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')

    movieEl.classList.add('movie')

    movieEl.innerHTML = `
			<img src="${IMG_PATH + poster_path}" alt="" />
			
			<div class="movie-info">
	  			<h3>${title}</h3>
	  			<span class="${
            vote_average > 5 ? (vote_average > 7.5 ? 'green' : 'orange') : 'red'
          }">${vote_average.toFixed(1)}</span>
			</div>
			
			<div class="overview">
	  			<h3>overview</h3>
				${overview}
			</div>
	`
    main.appendChild(movieEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})

function showPopularMovies() {
  getMovies(TRENDING_URL)
}
