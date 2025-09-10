export function truncateDescription(description: string, wordLimit: number): string {
    if (!description) return ""; // если описание пустое
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
}

