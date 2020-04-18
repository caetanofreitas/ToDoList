export default function getActualDate() {
    const date = new Date();
    let hour = completeNumber(date.getHours());
    let minute = completeNumber(date.getMinutes());
    const day = completeNumber(date.getDate());
    const month = getActualMonth(date.getMonth());
    return `${hour}:${minute} - ${day}/${month}`
};

function completeNumber(number) {
    if (number <= 9) {
        return `0${number}`
    } else {
        return number
    }
}

function getActualMonth(month) {
    switch (month) {
        case 0:
            return '01';
        case 1:
            return '02';
        case 2:
            return '03';
        case 3:
            return '04';
        case 4:
            return '05';
        case 5:
            return '06';
        case 6:
            return '07';
        case 7:
            return '08';
        case 8:
            return '09';;
        case 9:
            return '10';
        case 10:
            return '11';
        case 11:
            return '12';
        default:
            return '';
    }
}