// go to single post page
const gotoPost = id => {
  location.assign(`/posts/${id}`);
};

// get new post form
const getPostForm = () => {
  location.assign(`/posts/add`);
};

// get post edit form
const getPostEditForm = id => {
  location.assign(`/posts/update/${id}`);
}