export enum RoutesPathEnum {
  home = '/',
  signin = '/signin',
  signup = '/signup',
  board = '/board',
  tasks = '/board/:id',
  notFound = '/:pathMatch(.*)*',
}

export enum RoutesNameEnum {
  home = 'Home',
  signin = 'SignIn',
  signup = 'SignUp',
  board = 'Board',
  tasks = 'Tasks',
  notFound = 'NotFound',
}
