
let date = new Date();

const renderCalendar = ( )=> {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    console.log(viewMonth)

    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth+1}월`


    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth+1, 0);



    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate+1).keys()].slice(1);
    const nextDates = [];

    if(PLDay !== 6){
        for (let i = 0; i<PLDay+1; i++){
            prevDates.unshift(PLDate - i)
        }
    }

    for(let i =1; i<7-TLDay; i++){
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate)

    dates.forEach((date, i) => {
        const condition = i > firstDateIndex && i < lastDateIndex
                        ? 'this'
                        : 'other'
        dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`
    })

    document.querySelector('.dates').innerHTML = dates.join('');
}

renderCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
};

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

const goToday = () => {
    date = new Date();
    renderCalendar();
}