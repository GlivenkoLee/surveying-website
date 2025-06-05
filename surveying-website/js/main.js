// 简单表单弹窗，可扩展更多交互
document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form.contact-form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快联系您！');
        form.reset();
      });
    });
  });
// 其它你的JS可以保留
// --- 视差Banner ---
window.addEventListener('scroll', function() {
  var banner = document.querySelector('.banner');
  if(!banner) return;
  var img = banner.querySelector('img');
  var bannerRect = banner.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (bannerRect.bottom > 0 && bannerRect.top < windowHeight) {
    var scrolled = window.scrollY || window.pageYOffset;
    var parallax = ((scrolled - banner.offsetTop) * 0.18);
    img.style.transform = 'translateY(' + parallax + 'px) scale(1.05)';
  }
});
