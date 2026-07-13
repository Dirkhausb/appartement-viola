var menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('#navLinks a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
}

(function () {
  var emailCodes = [105, 110, 102, 111, 64, 97, 112, 112, 97, 114, 116, 101, 109, 101, 110, 116, 45, 118, 105, 111, 108, 97, 46, 100, 101];
  var phoneDisplayCodes = [48, 50, 49, 54, 51, 32, 57, 53, 49, 57, 52, 52, 57];
  var phoneTelCodes = [43, 52, 57, 50, 49, 54, 51, 57, 53, 49, 57, 52, 52, 57];
  var email = String.fromCharCode.apply(null, emailCodes);
  var phoneDisplay = String.fromCharCode.apply(null, phoneDisplayCodes);
  var phoneTel = String.fromCharCode.apply(null, phoneTelCodes);

  document.querySelectorAll('[data-obfuscate="email"]').forEach(function (el) {
    el.textContent = email;
    el.href = 'mailto:' + email;
  });
  document.querySelectorAll('[data-obfuscate="phone"]').forEach(function (el) {
    el.textContent = phoneDisplay;
    el.href = 'tel:' + phoneTel;
  });
})();
