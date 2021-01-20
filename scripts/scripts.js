class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem)
    };
  }

  renderPosts() {}

  showUserPost() {}

  // проверяет лайки у поста
  showLikedPost() {}

  // все посты
  showAllPosts() {}

  // открывает модальное окно
  openModal() {}
}

// пост
class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts; //массив получаем с сервера
  }
  // метод: добавить пост
  addPost(tweet) {
    const post = new Post(tweet);
    this.tweets.push(post);
  }
  // метод: удалить пост
  deletePost(id) {}
  // метод: лайк поста
  likePost(id) {}
}

// конструктор поста
class Post {
  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.postData = param.postData;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.like = false;
  }
  // ставит/снимает лайк
  changeLike() {
    this.like = !this.liked;
    if (this.like) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({
  listElem: ".tweet-list"
});

console.log(twitter);
