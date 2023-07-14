const newCommentHandler = async (event) => {
    event.preventDefault();

    const commenTextEl = document.querySelector("#comment-text");
    const content = commenTextEl.value.trim()
    const post_id = window.location.pathname.replace("/single/", "");

    if(!content){
        alert("Please fill in text!")
    } else{
        const response = await fetch("/commentRoutes",
        {
            method: "POST",
            body: JSON.stringify({content, post_id}),
            headers: {"Content-Type": "application/json"}
        })

        if(response.ok){
            location.reload()            
        }else{
            alert("Failed!")
        }
    }
}
const form = document.querySelector("#comment-form");

form.addEventListener("submit", newCommentHandler)