//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class PostList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(uppost) {
    this.posts.push(uppost);
  }
  sharePost(postTitle) {
    const lastPost = this.posts[postTitle];
    console.log(`You've shared post "${lastPost.title}" to your friend.`);
  }
}

// const postKaew = new PostList([{ title: "Harry Potter", year: 2023 }, {title: "Titan", year: 2000 }]);
// postKaew.sharePost(0);
// postKaew.addPost("kaew");
// console.log(postKaew.posts);

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}
// const addNewComment = new Post ("1","kaew","game",["have fun"]);
// addNewComment.addComment("kaew");
// console.log(addNewComment.comment)

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike(newLike = 1) {
    this.like += newLike;
  }
}
// const addlikeKaew = new Comment ("1","game","kaew");
// addlikeKaew.addLike(5)
// console.log(addlikeKaew.like)

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(newGroupList) {
    this.groupList.push(newGroupList);
  }
  addPage(newPageList) {
    this.pageList.push(newPageList);
  }
}

class FacebookPage {
  constructor(name) {}
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send() {
    console.log(
      `Notification: <comment-createdBy> has just commented on this post—"<post-title>”`
    );
  }
}
