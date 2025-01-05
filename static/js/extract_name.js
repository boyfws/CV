const path = window.location.pathname;

const name = path.split("/").pop()

if (name !== "backend" && name !== "ml") {
     window.location.replace("/error.html")
}