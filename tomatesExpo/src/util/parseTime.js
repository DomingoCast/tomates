const parseNumber = (n) => {
    return (("0" + Math.floor(n)).slice(-2))
}

const parseTime = (time) => {
    //const time = props.type === 'timer' ? props.goal - props.time : props.time
    const div = 60*60//*100
    const hours = time/div
    const minutes = (hours%1)*60
    const seconds = (minutes%1)*60
    console.log('[CLOCK]', hours, minutes, seconds)
    const miliseconds = seconds%1
    return ({
        hours: parseNumber(hours),
        minutes: parseNumber(minutes),
        seconds: parseNumber(seconds),
        miliseconds: miliseconds
    })
}

export default parseTime
