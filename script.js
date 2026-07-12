const tag = document.querySelector(".tag");

tag.addEventListener("mouseover", () => {
    tag.style.color = "hsl(47, 88%, 63%)";
});

tag.addEventListener("mouseout", () => {
    tag.style.color = "hsl(0, 0%, 7%)";
});