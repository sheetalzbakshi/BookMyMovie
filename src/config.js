export const useConfig = () => {
  return {
    baseUrl: "http://localhost:8085/api/v1",    
    movies : "movies",
    genres : "genres",
    artists : "artists",
    login : "auth/login",
    logout : "auth/logout",
    register : "signup"
  };
};
