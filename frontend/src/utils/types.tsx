export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

//add Course interface

export interface Mentor {
  id: number;
  user: User;
  course: Course;
}

//add Section interface

//add Student interface
