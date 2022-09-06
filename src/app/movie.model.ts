export class Movie {
    id: number;
    name: string;
    description: string;
    genre: string;
    rating: number;
    imageUrl: string;
    videoUrl: string;

    constructor(id: number, name: string, description: string, genre: string, rating: number, imageUrl: string, videoUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
    }
}