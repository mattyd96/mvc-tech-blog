const form = document.getElementById('comment-form');

const addComment = async event => {
  event.preventDefault();
  const comment = document.getElementById('comment').value;
  const post = window.location.pathname.split('/')[2];
  try {
    const response = await fetch('/comment/add', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({ comment, post }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log('could not add comment');
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', addComment);