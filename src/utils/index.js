


export const dateFormat = (date) => {
    const day = date.getDate();
    const monthYear = date.toLocaleDateString("en-GB", {
        month: 'long',
        year: 'numeric'
    });
    return `${day}${daySuffix(day)} ${monthYear}`
}

export const moneyFormat = (amount) => `£${amount.toLocaleString("en-GB")}`

const daySuffix = function(dayNumber) {
    if (dayNumber > 3 && dayNumber < 21) return 'th';
    switch (dayNumber % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}