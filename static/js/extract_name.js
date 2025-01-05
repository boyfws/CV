const name = sessionStorage.getItem("path")

if (name === null) {
    window.location.replace('/CV/404.html');
}