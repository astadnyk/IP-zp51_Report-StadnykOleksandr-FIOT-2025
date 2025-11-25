// Функція для відображення вмісту вкладки
function showTab(tabId) {
    // Отримуємо всі вкладки
    const tabs = document.querySelectorAll('#output .tab-content');
    
    // Ховаємо всі вкладки
    tabs.forEach(tab => tab.style.display = 'none');
    
    // Показуємо вказану вкладку
    document.getElementById(tabId).style.display = 'block';
}
