// Get the modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImage = document.querySelector(".modalImage");
var captionText = document.querySelector(".caption");

Array.from(document.querySelectorAll(".projectImg")).forEach(item => {
    item.addEventListener("click", event => {
        modal.style.display = "block";
        modalImage.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    });
})

// When the user clicks on <span> (x), close the modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});
