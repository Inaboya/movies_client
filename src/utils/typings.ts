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
  movie: any | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
    auth: any; // Update with the actual auth state type
    movie: {
      movies: any; // Update with the actual movies state type
      loading: boolean;
      movie: any; // Update with the actual movie state type
      error: string | null;
    };
  }
