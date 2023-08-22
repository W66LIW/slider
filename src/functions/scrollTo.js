export default function scrollTo(index) {
    document.getElementById(`${index}`).scrollIntoView({ behavior: "smooth"})
    console.log("func")
}

