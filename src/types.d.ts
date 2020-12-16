type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type User = {
  name: string
  age: number
  posts: Array<Post>
}

type Post = {
  title: string
  text: string
  likes: number
}

type Props = {
  user: User
}

type PersonalInfos = {
  name: string
  age: number
}

type AddUser = (newUser: User) => void;

type Prop = {
  addUser: AddUser
}
