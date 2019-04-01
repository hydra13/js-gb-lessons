let priceList = [];

function getRandomPrice() {
    return (Math.random() * 100).toFixed(2);
}

function fillTestDataToPriceList() {
    priceList = [];
    let productsNames = [
        'Ручка',
        'Карандаш',
        'Пенал',
        'Тетрадь',
        'Дневник',
        'Блокнот',
        'Альбом',
        'Ластик',
        'Портфель',
        'Сумка',
        'Пропись',
        'Фломастеры',
        'Акварель',
        'Кисточки',
        'Пластелин',
        'Картон',
        'Ножницы',
        'Клей',
        'Корректор',
        'Скрепки',
        'Обложка для тетради',
        'Линейка',
        'Точилка',
        'Скотч',
        'Стикеры',
        'Папки',
        'Конверты'
    ];

    for (let i = 0; i < productsNames.length; i++) {
        priceList.push(new Product(productsNames[i], getRandomPrice()));
    }
}