    // Функція для завантаження сторінки у правий блок
    async function loadPage(page) {
        try {
            // Завантаження файлу
            let response = await fetch("lab2/" + page);
            // Отримання тексту файлу
            let text = await response.text();
            // Вставка завантаженого тексту у правий блок
            document.getElementById("output").innerHTML = text;
        } catch (err) {
            // Обробка помилки завантаження
            document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        }
    }
    