/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Book {
  title;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Book> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
