export const scrollToSection = (id: string): void => {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};