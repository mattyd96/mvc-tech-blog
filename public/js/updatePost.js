const updateForm = document.getElementById('update-post-form');
const deleteBtn = document.getElementById('delete-btn');

// update post
const updatePost = async event => {
  event.preventDefault();

  // get post id, title, content
  const id = location.pathname.split('/')[3];
  const title = document.getElementById('title-text').value;
  const content = document.getElementById('content-text').value;

  try {
    // update post
    const response = await fetch(`/posts/update/${id}`, {
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ id, title, content })
    });

    // on success go to dashboard
    if(response.ok) {
      location.assign('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

// delete a post
const deletePost = async event => {
  event.preventDefault();

  // get post id
  const id = location.pathname.split('/')[3];

  try {
    // delete post
    const response = await fetch(`/posts/delete/${id}`, {
      method: 'DELETE',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ id })
    });

    // go to dashboard
    if(response.ok) {
      location.assign('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

updateForm.addEventListener('submit', updatePost);
deleteBtn.addEventListener('click', deletePost);