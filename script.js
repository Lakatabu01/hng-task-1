let dayInfo = document.querySelector(".week-day")
let timeInfo = document.querySelector(".timer")

const getWeekday = () => {
const date = new Date()
const day = date.getDay()
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekday = daysOfTheWeek[day]
dayInfo.textContent =  weekday

}

getWeekday()

const getTime = () => {
    const date = new Date()
    const time = date.getTime()
    timeInfo.textContent =  time
    }
    
    getTime()

