import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function SeaOtterClock(props: P) {
    const peak = 3272;
    const current = 2962;
    const progress = (peak - current) / peak;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Sea Otter Time'
            desc='Based on California Sea Otter populations from 2016 to 2020. 12:00am = estimated 2016 population. 11:59pm = extinct.'
            link='https://www.mmc.gov/priority-topics/species-of-concern/southern-sea-otter/'
        />
    );
}

export default SeaOtterClock;
