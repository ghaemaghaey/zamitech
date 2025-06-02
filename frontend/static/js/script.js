/////////////////////
// Hamberger Menue
/////////////////////

const navBtn = document.querySelector(".nav-menu__mobile--btn");
const navMenu = document.querySelector(".nav-menu__mobile");
let navOpen = false;

// تابع برای بستن منو
function closeMenu() {
  navBtn.classList.remove("nav__btn--open");
  navMenu.classList.remove("nav-menu--open");
  navOpen = false;
}

// کلیک روی دکمه همبرگر
navBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // جلوگیری از انتشار رویداد به document
  if (navOpen) {
    closeMenu();
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    navOpen = true;
  }
});

// کلیک در هر جای صفحه (غیر از منو)
document.addEventListener("click", function (e) {
  if (navOpen && !navMenu.contains(e.target) && !navBtn.contains(e.target)) {
    closeMenu();
  }
});




/////////////////////
// Priducts
/////////////////////



document.addEventListener('DOMContentLoaded', function() {
    // در ابتدا مطمئن شوید فقط "همه محصولات" فعال است
    const defaultTab = document.querySelector('.tab[data-tab-target="nav-classic-tab"]');
    const defaultContent = document.getElementById('nav-classic-tab');

    // فعال کردن تب و محتوای "همه محصولات" (اگر از قبل active نیستند)
    defaultTab.classList.add('active');
    defaultContent.classList.add('active');

    // بقیه کد مدیریت تب‌ها مانند قبل
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // حذف کلاس active از همه تب‌ها و محتواها
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // فعال کردن تب و محتوای انتخاب شده
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-tab-target');
            
            if (targetId === 'nav-classic-tab') {
                // نمایش همه محصولات
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('active');
                });
            } else {
                // نمایش فقط محتوای مرتبط
                document.getElementById(targetId).classList.add('active');
            }
        });
    });
});



/////////////////////
// Leazy Loawding
/////////////////////



document.addEventListener('DOMContentLoaded', function() {
  // انتخاب تمام تصاویری که هنوز lazy نشده‌اند
  const images = document.querySelectorAll('img:not([loading="lazy"])');

  // اگر Intersection Observer پشتیبانی شود
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // اگر داده‌ی src در data-src ذخیره شده باشد
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img); // پس از لود، دیگر observe نکند
        }
      });
    }, {
      rootMargin: '200px', // 200px قبل از رسیدن به viewport لود شود
    });

    images.forEach(img => {
      if (!img.src) {
        img.dataset.src = img.getAttribute('src') || img.getAttribute('data-src');
        img.removeAttribute('src');
      }
      observer.observe(img);
    });
  } 
  // برای مرورگرهای قدیمی (Fallback)
  else {
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }
});