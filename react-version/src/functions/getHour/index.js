export default function getHour() {
    const date = new Date();
    let hour = getActualMinute(date.getHours());
    let minute = getActualMinute(date.getMinutes());

    return `${hour}:${minute}`
}

function getActualMinute(minute) {
    if (minute <= 9) {
        return `0${minute}`
    } else {
        return minute
    }
}