//* 날짜 필터링
export function filterDatetime(updated) {
    const now = new Date();
    const targetDatetime = new Date(updated);

    let year = targetDatetime.getYear() - 100
    let month = targetDatetime.getMonth();
    let date = targetDatetime.getDate()
    let hours = targetDatetime.getHours()
    let minutes = targetDatetime.getMinutes()

    const yearDiff = now.getFullYear() - targetDatetime.getFullYear();
    const monthDiff = now.getMonth() - month;
    const dayDiff = now.getDate() - date;
    const hourDiff = now.getHours() - hours;
    const minuteDiff = now.getMinutes() - minutes;

    function tostring(int) {
        return int.toString().padStart(2, 0)
    }

    if (yearDiff === 0) {
        if (monthDiff === 0 && dayDiff === 0) {
            if (hourDiff === 0) {
                if (minuteDiff > 30) {
                    return "방금 전";
                } else {
                    return minuteDiff + "분 전";
                }
            } else {
                return `${tostring(hours)}:${tostring(date)}`
            }
        } else {
            return `${tostring(month)}.${tostring(date)}`
        }
    } else {
        return `${tostring(year)}-${tostring(month)}-${tostring(date)}`
    }
}