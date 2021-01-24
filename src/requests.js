const API_KEY = 'b1c2c224af168ee983ec969d508aac94';

const requests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMoivies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMoivies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMoivies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMoivies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,


}

export default requests ;