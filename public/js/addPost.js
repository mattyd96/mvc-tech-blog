const postForm = document.getElementById('add-post-form');
const titleInput = document.getElementById('title-text');
const contentInput = document.getElementById('content-text');

const addPost = async event => {
  event.preventDefault();

  try {
    // get title and content text
    const title = titleInput.value;
    const content = contentInput.value;

    // send post
    const response = await fetch('/posts/add', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({ title, content })
    });
    
    // if response is ok -> reload page
    if(response.ok) {
      location.assign('/dashboard');
    } else {
      postErrors(response.json());
    }

  } catch (err) {console.log(err)}
};

const postErrors = errors => {
  const titleError = document.querySelector('.title-error');
  const contentError = document.querySelector('.content-error');

  titleError.classList.add('hidden');
  contentError.classList.add('hidden');

  if( errors.title) {  
    titleError.classList.remove('hidden');
  }

  if(errors.content) {
    contentError.classList.remove('hidden');
  }
}

postForm.addEventListener('submit', addPost);