function callBackend() {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => document.getElementById("response").innerText = data.message)
      .catch(err => console.log(err));
}
