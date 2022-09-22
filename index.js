const markAllRead = document.querySelector(".markAllRead");
const notifcationsBar = document.querySelector("ul");
const notifcations = document.querySelectorAll("li");

let removeClass = () => {

    for (let i = 0; i< notifcationsBar.children.length; i++) {
        if (notifcations[i].classList.contains(`active`)
        ) {
            notifcations[i].classList.remove("active");
            
        }
    }


}
markAllRead.addEventListener("click", removeClass);
