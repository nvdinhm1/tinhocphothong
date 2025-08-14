document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault(); // Chặn submit
      form.reportValidity(); // Hiển thị tooltip lỗi HTML5
      return;
    }

    // Nếu hợp lệ
    alert("✅ Gửi thành công!");
    form.reset();
  });
});
