/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 29/03/2021
# Update date: 30/03/2021
# Version: 1.0
*/

const arrows = document.querySelectorAll(".arrow");
const gameLists = document.querySelectorAll(".game-list");

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
    	gameLists[i].style.transform = "translateX(-100px)"
    })
})



