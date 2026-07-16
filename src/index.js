// Импортируем стили
import './style.css';

// Импортируем картинку гнома
import goblinImage from './img/goblin.png';

// ============================================
// ЛОГИКА ИГРЫ
// ============================================

// Получаем контейнер
const board = document.getElementById('game-board');

// Функция создания поля
export function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        board.appendChild(cell);
    }
    return document.querySelectorAll('.cell');
}

// Функция создания гнома
export function createGoblin() {
    const goblin = document.createElement('img');
    goblin.className = 'goblin';
    goblin.src = goblinImage;
    goblin.alt = 'Гном';
    return goblin;
}

// Функция генерации случайного индекса (не равного текущему)
export function getRandomDifferentIndex(currentIndex, totalCells) {
    let newIndex;
    let attempts = 0;
    const maxAttempts = 100;

    do {
        newIndex = Math.floor(Math.random() * totalCells);
        attempts++;
    } while (newIndex === currentIndex && attempts < maxAttempts);

    // Если не удалось найти другой индекс - берем следующий
    if (newIndex === currentIndex) {
        newIndex = (currentIndex + 1) % totalCells;
    }

    return newIndex;
}

// Функция размещения гнома в случайной ячейке
export function placeGoblinRandomly(goblin, cells) {
    if (!cells || cells.length === 0) return -1;

    const index = Math.floor(Math.random() * cells.length);
    cells[index].appendChild(goblin);
    return index;
}

// Функция перемещения гнома
export function moveGoblin(goblin, cells, currentIndex) {
    if (!cells || cells.length === 0) return -1;
    if (!goblin) return -1;

    const newIndex = getRandomDifferentIndex(currentIndex, cells.length);
    cells[newIndex].appendChild(goblin);
    return newIndex;
}

// ============================================
// ЗАПУСК ИГРЫ
// ============================================

// Создаем поле
const cells = createBoard();

// Создаем гнома
const goblin = createGoblin();

// Размещаем гнома
let currentIndex = placeGoblinRandomly(goblin, cells);

// Запускаем перемещение каждую секунду
setInterval(() => {
    currentIndex = moveGoblin(goblin, cells, currentIndex);
}, 1000);

// Очистка интервала при выгрузке страницы
window.addEventListener('beforeunload', () => {
    // Можно сохранить intervalId и очистить
});
