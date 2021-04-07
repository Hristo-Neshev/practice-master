function timeCalculator(concertProgram) {
    let time = 0;
    concertProgram.forEach(piece => {
        const [minutes, seconds] = piece.length.split(':');

        if (seconds.length === 2) {
            const secondsArr = seconds.split('');
            if (secondsArr[0] == 0) {
                seconds = seconds.split('')[1];
            }

        }
        time += Number(seconds) + Number(minutes * 60);
    });

    const minutes = Math.floor(time / 60);
    let seconds = time - (minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    const totalLength = `${minutes}:${seconds}`;

    return totalLength;
}

export default timeCalculator;