import { eng, ptBr } from '../../assets/lang';
let language = '';

export default function getData(Lang) {
    Lang === 'eng' ? language = eng : language = ptBr;
    const date = new Date();
    let day = date.getDate();
    let month = getActualMonth(date.getMonth());
    let weekDay = getActualDayOfTheWeek(date.getDay());

    return Lang === 'eng' ?
        `${weekDay}, ${month} ${day}` :
        `${weekDay}, ${day} de ${month}`
}

function getActualMonth(month) {
    switch (month) {
        case 0:
            return language.date.months.jan;
        case 1:
            return language.date.months.feb;
        case 2:
            return language.date.months.mar;
        case 3:
            return language.date.months.apr;
        case 4:
            return language.date.months.may;
        case 5:
            return language.date.months.jun;
        case 6:
            return language.date.months.jul;
        case 7:
            return language.date.months.ag;
        case 8:
            return language.date.months.sep;
        case 9:
            return language.date.months.oct;
        case 10:
            return language.date.months.nov;
        case 11:
            return language.date.months.dec;
        default:
            return '';
    }
}

function getActualDayOfTheWeek(day) {
    switch (day) {
        case 0:
            return language.date.weekDays.sun;
        case 1:
            return language.date.weekDays.mon;
        case 2:
            return language.date.weekDays.tue;
        case 3:
            return language.date.weekDays.wed;
        case 4:
            return language.date.weekDays.thu;
        case 5:
            return language.date.weekDays.fri;
        case 6:
            return language.date.weekDays.sat;
        default:
            return '';
    }
}