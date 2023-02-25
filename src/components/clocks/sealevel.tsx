import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function SeaLevelClock(props: P) {
    const current = 104;
    const peak = 304.8;

    const progress = current / peak;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Sea Level Clock'
            desc={[
                'Based on Sea Level Rise since 1993.', '12:00am = 1993 Sea Levels', '11:59pm = 12 inch rise'
            ]}
            link='https://climate.nasa.gov/vital-signs/sea-level/'
        />
    );
}

export default SeaLevelClock;
