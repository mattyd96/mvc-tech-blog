const res = require("express/lib/response");

const form = document.getElementById('comment-form');

const addComment = async event => {
  event.preventDefault();
  const comment = document.getElementById('comment').value;
  try {
    const response = await fetch('comment/add', {
      method: 'POST',
      headers: {
        'constent-type' : 'application/json'
      },
      body: JSON.stringify({ comment })
    });

    if (res.ok) {
      window.location.reload();
    } else {
      console.log('could not add comment');
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', addComment);