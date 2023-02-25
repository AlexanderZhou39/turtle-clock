import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function BlueWhaleClock(props: P) {
    const peak = 340280;
    const current = 4727;
    const progress = (peak - current) / peak;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Blue Whale Clock'
            desc={['Based on Blue Whale populations from 1890 to 2001.', '12:00am = estimated 1890 population.', '11:59pm = extinct.']}
            link='https://ourworldindata.org/grapher/whale-populations?country=Blue+whale~Fin+whale~Sei%2FBryde%27s+whale~Minke+whale~Gray+whale~Right+whale~Bowhead+whale~Humpback+whale'
        />
    );
}

export default BlueWhaleClock;
