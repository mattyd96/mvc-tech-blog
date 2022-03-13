const updateForm = document.getElementById('update-post-form');

const updatePost = async event => {
  event.preventDefault();

  const id = location.pathname.split('/')[3];
  const title = document.getElementById('title-text').value;
  const content = document.getElementById('content-text').value;

  try {
    const response = await fetch(`/posts/update/${id}`, {
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ id, title, content })
    });

    if(response.ok) {
      location.assign('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

updateForm.addEventListener('submit', updatePost);