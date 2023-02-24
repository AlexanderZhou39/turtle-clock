import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function LongNowClock(props: P) {
    const progress = (new Date()).getFullYear() / 10000;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='The Long Now'
            desc={['Based on the 10,000 year clock of The Long Now Foundation.', '12:00am = 1AD.', '11:59pm = 10,000AD']}
            link='https://longnow.org/clock/'
        />
    );
}

export default LongNowClock;
