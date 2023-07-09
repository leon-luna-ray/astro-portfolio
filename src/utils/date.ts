export const getTimeSince = (dateString: string): string => {
    const now: Date = new Date();
    const date: Date = new Date(dateString);
    const timeDiff: number = now.getTime() - date.getTime();

    const minutes: number = Math.floor(timeDiff / (1000 * 60));
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours: number = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days < 7) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }

    const weeks: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    if (weeks < 52) {
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    }

    const years: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 52));
    return `${years} year${years !== 1 ? 's' : ''} ago`;
};

export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date: Date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};