let movies = [
    {
        id:0,
        name:"Good Will Hunting",
        score:4.9
    },
    {
        id: 1,
        name: "National Treasure",
        score: 4.0
    },
    {
        id: 2,
        name: "The Godfather",
        score: 4.8
    },
    {
        id: 3,
        name: "Ocean's eleven",
        score: 4.7
    },
    {
        id: 4,
        name: "Ocean's twelve",
        score: 4.2
    },
    {
        id: 5,
        name: "Ocean's thirteen",
        score: 4.1
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