const form = document.getElementById('comment-form');

const addComment = async event => {
  event.preventDefault();

  // error message divs
  const errorDiv = document.getElementById('comment-error');
  const commentInput = document.getElementById('comment');

  //path and comment content
  const post = window.location.pathname.split('/')[2];
  const comment = commentInput.value;

  try {
    // post comment
    const response = await fetch('/comment/add', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({ comment, post }),
    });

    // if response is ok -> reset comment and reload page
    if (response.ok) {
      commentInput.value = "";
      window.location.reload();

      // if user not logged in -> go to login page
    } else if (response.status === 302) {
      location.assign('/login');
    } else {
      // handle no comment error
      const res = await response.json();
      if(res.error) {
        errorDiv.classList.remove('hidden');
      }
      console.log('could not add comment');
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', addComment);