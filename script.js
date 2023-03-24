const btn = document.querySelector("#btn")
btn.addEventListener("click", () =>{
    const card = document.querySelectorAll(".c")
    const dot = document.querySelectorAll(".p")
    const num = document.querySelector("#b")
    card.forEach(e => {
        e.classList.remove("active")
    })
    dot.forEach(e => {
        e.classList.remove("act")
    })
    num.innerText = "0"
})
