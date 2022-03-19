const logout = async () => {
  // logout
  const response = await fetch('/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'}
  });
  // go to home on success
  if (response.ok) {
    document.location.assign('/');
  } else {
    console.log('error when logging out');
  }
}