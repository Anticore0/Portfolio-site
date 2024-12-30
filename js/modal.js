export const modal = () => {
    const imagesList = document.querySelectorAll(".card img");

    imagesList.forEach(element => {
        element.addEventListener("click", () => {
            const modalId = "fullImageModal";
            const modal = document.getElementById(modalId);
            const bsModal = new bootstrap.Modal(modal);
            const originSrc = element.getAttribute("src");
            const modalImg = document.getElementById("fullImage");
            modalImg.setAttribute("src", originSrc);
            bsModal.show();
        })
    });
}