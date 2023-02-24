import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function Co2Clock(props: P) {
    const threshold = 475;
    const current = 419;
    const progress = current / threshold;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='CO2 Clock'
            desc={['Based on atmospheric carbon dioxide parts per million compared to 2100 projections for 2 degrees celsius of warming.', '12:00am = 1870s CO2 PPM.', '11:59pm = 2100 projection CO2 PPM.']}
            link='https://www.co2.earth/'
        />
    );
}

export default Co2Clock;
