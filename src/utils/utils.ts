export const scrollToSection = (id: string): void => {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export const calculateLanguagePercentage = (
    languageObject: Record<string, number>
): { title: string; value: number }[] => {
    const totalBytes = Object.values(languageObject).reduce(
        (acc, val) => acc + val,
        0
    );

    const languageArray = Object.entries(languageObject).map(
        ([language, bytes]) => ({
            title: language,
            value: parseFloat(((bytes / totalBytes) * 100).toFixed(2)),
        })
    );

    languageArray.sort((a, b) => b.value - a.value);

    return languageArray;
};
