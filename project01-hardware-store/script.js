/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 10/03/2021
# Update date:
# Version: 1.0
*/
const arrows = document.querySelectorAll(".arrow");
const gameLists = document.querySelectorAll(".game-list");
let move = 0;

arrows.forEach((arrow, i) => {
    const itemNumber = gameLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 220);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            gameLists[i].style.transform = `translateX(${move-=250}px)`
        } else {
            gameLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
            move = 0;
        }
    });

});