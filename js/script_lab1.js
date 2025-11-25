// Асинхронна функція для завантаження вмісту сторінки
async function loadPage(page) {
    try {
        // Завантажуємо вміст файлу через fetch
        let response = await fetch("lab1/" + page);
        let text = await response.text();

        // Вставляємо вміст у контейнер з id "output"
        document.getElementById("output").innerHTML = text;

        // Якщо є iframe для демонстрації проєкту, оновлюємо його src
        const iframe = document.querySelector('#output iframe');
        if (iframe) {
            // Оновлюємо шлях до проєкту
            iframe.src = 'lab1/project/index.html';
        }

    } catch (err) {
        // Якщо сталася помилка, виводимо повідомлення
        document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        
        // Виводимо помилку у консоль для налагодження
        console.error(err);
    }
}