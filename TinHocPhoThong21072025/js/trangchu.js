// Hiển thị hoặc ẩn nút "Back to Top" khi cuộn trang
window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Khi click vào nút, cuộn mượt lên đầu trang
document.getElementById("backToTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
