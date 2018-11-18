document.addEventListener('DOMContentLoaded', evt => {
  const homeApp = new Vue({
    el: "#home",
    data: {
      items: [],
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '84809cc489047f96f78d2178f63792ef',
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      movie: true,
      genres: [],
      keyword: null
    },
  
    created: function created() {
      this.$http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
        .then(res => this.genres = res.body.genres)
      this.fetchData();
    },	
	methods: {
      fetchData: function fetchData() {
        var _this = this;
        this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc').then(function (response) {
          console.log(response.body)
          _this.items = response.body;
          _this.movie = false;
        });
      },
	  searchMovie (query) {
        this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
          .then(res => {
            this.items = res.body
          })
      }
    }
  });
	
document.getElementById('searchForm').addEventListener('submit', function(evt) {
    evt.preventDefault()
    homeApp.searchMovie(document.getElementById('searchInput').value)
  })
})

document.addEventListener('DOMContentLoaded', evt => {
  const topmoviesApp = new Vue({
    el: "#topmovies",
    data: {
      items: [],
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '84809cc489047f96f78d2178f63792ef',
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      movie: true,
      genres: [],
      keyword: null
    },
  
    created: function created() {
      this.$http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
        .then(res => this.genres = res.body.genres)
      this.fetchData();
    },
	methods: {
      fetchData: function fetchData() {
        var _this = this;
        this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=vote_count.desc').then(function (response) {
		console.log(response.body)
        _this.items = response.body;
        _this.movie = false;
        });
      },
	  searchMovie (query) {
        this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
          .then(res => {
            this.items = res.body
          })
      }
    }
  });
  document.getElementById('searchForm').addEventListener('submit', function(evt) {
    evt.preventDefault()
    topmoviesApp.searchMovie(document.getElementById('searchInput').value)
  })
})

document.addEventListener('DOMContentLoaded', evt => {
  const upcomingApp = new Vue({
    el: "#upcoming",
    data: {
      items: [],
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '84809cc489047f96f78d2178f63792ef',
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      movie: true,
      genres: [],
      keyword: null
    },
  
    created: function created() {
      this.$http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
        .then(res => this.genres = res.body.genres)
      this.fetchData();
    },
    methods: {
      fetchData: function fetchData() {
        var _this = this;
        this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=release_date.desc').then(function (response) {
		console.log(response.body)
        _this.items = response.body;
        _this.movie = false;
        });
      },
	  searchMovie (query) {
        this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
          .then(res => {
            this.items = res.body
          })
      }
    }
  });
  document.getElementById('searchForm').addEventListener('submit', function(evt) {
    evt.preventDefault()
    upcomingApp.searchMovie(document.getElementById('searchInput').value)
  })
})

new Vue({
  el: "#genres",
  data: {
    items: [],
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '84809cc489047f96f78d2178f63792ef',
    imageUrl: 'https://image.tmdb.orgP/t/p/w342',
    loaded: true
  },

  created: function created() {
    this.fetchData()
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey).then(function (response) {
        _this.items = response.body;
        _this.loaded = false;
      })
    }
  }
})

