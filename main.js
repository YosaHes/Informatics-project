// تفعيل الوضع الليلي لجميع الصفحات
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkMode);
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('#dark-btn')) {
            const isDark = !document.body.classList.contains('dark-mode');
            document.body.classList.toggle('dark-mode', isDark);
            localStorage.setItem('darkMode', isDark);
        }
    });
    
    // تحديث السنة تلقائيًا
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // تحميل الصور بسلاسة
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) img.style.opacity = '1';
        else img.addEventListener('load', () => img.style.opacity = '1');
        img.style.opacity = '0';
    });
    document.getElementById('go-back').addEventListener('click', function(event) {
    event.preventDefault();
    history.back();
});
document.getElementById("dark-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
});