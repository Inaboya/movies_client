export interface UserPayload {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface AuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: UserPayload | null;
  error: string | null;
}

export interface MovieInitialState {
  movies: any[];
  favoriteMovies: any[];
  movie: any | null;
  favoriteMovie: any | null;
  // loading: boolean;
  error: string | null;
}


  export interface FormData {
    name? : string;
    email : string;
    password: string;
    password2?: string;
  }

  export interface MovieData {
    movieId: string;
    starRating: number;
  }
