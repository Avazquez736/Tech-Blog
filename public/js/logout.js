const logoutButton = document.getElementById("logout");

const logoutSession = async (event) => {
    event.preventDefault();

    const response =  await fetch("/api/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
    });

    if(response.ok){
        document.location.replace("/");
    }else {
        alert(response.statusText);
    }
}
logoutButton.addEventListener("click", logoutSession);