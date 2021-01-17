// Get the image modal
var modal = document.querySelector(".modal");

// Get the video modal
var modalVid = document.querySelector(".modalVid");

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

//Get the video and embed it inside the modal
var modalVidContent = document.querySelector(".modalVidContent");
var captionTextVid = document.querySelector(".captionVid");

var videos = ["videos/vid0.mp4",
    "videos/vid1.mp4",
    "videos/vid2.mp4",
    "videos/vid3.mp4",
    "videos/vid4.mp4"];

Array.from(document.querySelectorAll(".fa-play-circle")).forEach(item => {
    item.addEventListener("click", event => {
        var index = event.target.id;
        modalVid.style.display = "block";
        modalVidContent.src = videos[index];
        captionTextVid.innerHTML = event.target.title;
        console.log(index);
    });
})

// When the user clicks on <span> (x), close the image modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

// When the user clicks on <span> (x), close the video modal
document.querySelector(".closeVid").addEventListener("click", () => {
    modalVid.style.display = "none";
    modalVidContent.src = null;
});
