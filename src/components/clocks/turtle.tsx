import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function TurtleClock(props: P) {
    const progress = 2/3;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Turtle Clock'
            desc={['Based on turtle populations from pre-industrial age to today.', '12:00am = estimated pre-industrial population.', '11:59pm = extinct.']}
            link='https://emagazine.com/sea-turtle-populations-in-freefall/'
        />
    );
}

export default TurtleClock;
