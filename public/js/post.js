const gotoPost = id => {
  location.assign(`/posts/${id}`);
};

const getPostForm = () => {
  location.assign(`/posts/add`)
};