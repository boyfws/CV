const name = sessionStorage.getItem("path")

if (name === null) {
    window.location.replace('/404.html');
}