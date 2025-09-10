export function createStarsForRating(container: HTMLElement, averageRating: number) {
    const fullStar = `<svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#FFD700"/>
    </svg>`;

    const emptyStar = `<svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
    </svg>`;

    container.innerHTML = ""; // очищаем контейнер

    const stars = Math.round(averageRating); // округляем рейтинг до ближайшего целого

    for (let i = 0; i < 5; i++) {
        container.innerHTML += i < stars ? fullStar : emptyStar;
    }
}
