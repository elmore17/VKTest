export interface FilmInfo{
    id: number;
    poster: {
        url: string;
    };
    name: string;
    year: number;
    rating: {
        imdb: number;
    };
    alternativeName: string;
}

export interface Films {
    docs: FilmInfo[];
}