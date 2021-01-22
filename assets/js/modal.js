// Get the image modal
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImage = document.querySelector(".modalImage");
var captionText = document.querySelector(".caption");
var modalText = document.querySelector(".modalText");

Array.from(document.querySelectorAll(".projectImg")).forEach(item => {
    item.addEventListener("click", event => {
        var body = event.target.parentElement.querySelector(".hiddenModalText");
        modal.style.display = "block";
        modalImage.src = event.target.src;
        captionText.innerHTML = event.target.alt;
        modalText.innerHTML = body.innerHTML;
    });
})

// When the user clicks on <span> (x), close the image modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

