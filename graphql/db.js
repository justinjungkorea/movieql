let movies = [
    {
        id:0,
        name:"Good Will Hunting",
        score:49
    },
    {
        id: 1,
        name: "National Treasure",
        score: 40
    },
    {
        id: 2,
        name: "The Godfather",
        score: 48
    },
    {
        id: 3,
        name: "Ocean's eleven",
        score: 47
    },
    {
        id: 4,
        name: "Ocean's twelve",
        score: 42
    },
    {
        id: 5,
        name: "Ocean's thirteen",
        score: 41
    }
];    

export const getMovies = () => movies;

export const getById = id =>{
     const filteredMovies = movies.filter(movie => movie.id === String(id));
     return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id === String(id));
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }
    else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.lenth + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};