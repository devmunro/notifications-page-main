const markAllRead = document.querySelector(".markAllRead");
const notifcationsBar = document.querySelector("ul");
const notifcations = document.querySelectorAll("li");

const notificationsNumber = document.querySelector(".notificationsNumber") 
console.log(notificationsNumber)
let removeClass = () => {

    for (let i = 0; i< notifcationsBar.children.length; i++) {
        if (notifcations[i].classList.contains(`active`)
        ) {
            notifcations[i].classList.remove("active");
            
            

        }

        
        notificationsNumber.textContent = "0";
    }


}
markAllRead.addEventListener("click", removeClass);
