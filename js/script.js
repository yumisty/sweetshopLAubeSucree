// 菜单按钮
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('show');
});

// 上浮动画
AOS.init();


// 开门动画
window.addEventListener('load', function() {
    setTimeout(function() {
        // 1. 文字淡出
        const introContent = document.querySelector('.intro-content');
        if(introContent) introContent.classList.add('fade-out');
        
        // 2. 开门
        document.getElementById('door-layer').classList.add('active');
    }, 1500); 
});

// 线条动画

