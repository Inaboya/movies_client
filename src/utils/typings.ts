interface UserPayload {
  name: string;
  email: string;
  password: string;
  password2: string;
}

interface AuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: UserPayload | null;
}

interface MovieInitialState {
  movies: any[];
}
