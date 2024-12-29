async function likeCode() {
  return new Promise((Like)=>{
    Like("Liked the Post Successfully");
  });
};

async function commandCode() {
  return new Promise((commentPosted)=>{
    commentPosted("Comment Posted Successfully");
  });
};

async function createPost(){
  var post = new Promise((cPost)=>{
    cPost("Post Created Successfully");
  });
  // ERROR: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'Symbol(Symbol
  // var [posts,Comment,Like] =  Promise.all([post,commandCode(),likeCode()]); //

  var [posts,Comment,Like] = await Promise.all([post,commandCode(),likeCode()]);
  console.log(posts);
  console.log(Comment);
  console.log(Like);
};

createPost()

// Create a new file called insta.js and copy the code from the above snippet.