export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface WhoIamResponse {
  userId: string;
  email: string;
  roles: Array<string>;
}
