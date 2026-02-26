const previewImages = document.querySelectorAll(".preview-img");
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.querySelector(".close-btn");

previewImages.forEach(img => {
    img.addEventListener("click", () => {
        viewer.style.display = "flex";
        viewerImg.src = img.src; // lấy ảnh gốc
    });
});

closeBtn.addEventListener("click", () => {
    viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
        viewer.style.display = "none";
    }
});