document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // ۱. انیمیشن ورود نرم کارت به محض لود صفحه (سینماتیک و بدون نیاز به تغییر CSS قبلی)
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px) scale(0.98)';
  container.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';

  setTimeout(() => {
    container.style.opacity = '1';
    container.style.transform = 'translateY(0) scale(1)';
  }, 150);

  // ۲. افکت پارالکس سه‌بعدی کارت با حرکت موس (فقط دسکتاپ)
  if (window.innerWidth > 768) {
    // تنظیم ترانزیشن پایه برای تعقیب نرم حرکت موس
    container.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s cubic-bezier(0.16, 1, 0.3, 1)';

    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 30; // حساسیت ملایم‌تر برای طبیعی‌تر شدن
      const yAxis = (window.innerHeight / 2 - e.pageY) / 30; 
      
      container.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    });

    // برگشتن کارت به حالت اول به صورت کاملاً نرم وقتی موس از صفحه خارج میشه
    document.addEventListener('mouseleave', () => {
      container.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });

    // بازگرداندن ترانزیشن تعقیبی موقع ورود مجدد موس
    document.addEventListener('mouseenter', () => {
      container.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
    });
  }
});
