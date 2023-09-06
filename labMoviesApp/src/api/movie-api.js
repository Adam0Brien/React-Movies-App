export const login = (username, password) => {
    return fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username: username, password:password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


export const getTopMovies = () => {
    return fetch(
       '/api/top',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcomming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getInCinema = () => {
    return fetch(
       '/api/now-playing',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };