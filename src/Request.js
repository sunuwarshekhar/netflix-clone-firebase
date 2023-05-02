const key = 'cc56bf96c72f05080768ad1b14b1af3c'

const requests = {
    requestToprated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    // requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
}

export default requests