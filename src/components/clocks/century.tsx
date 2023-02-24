import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function CenturyClock(props: P) {
    const time = new Date();
    const year = time.getFullYear();

    const nextDecade = new Date();
    nextDecade.setDate(1);
    nextDecade.setMonth(0);
    nextDecade.setFullYear(year + (100 - (year % 100)));

    const prevDecade = new Date();
    prevDecade.setDate(1);
    prevDecade.setMonth(0);
    prevDecade.setFullYear(year - (year % 100));
    
    const totalDiff = nextDecade.getTime() - prevDecade.getTime();
    const totalProg = time.getTime() - prevDecade.getTime();

    const progress = totalProg / totalDiff;

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Century Clock'
            desc={['12:00am = start of century.', '11:59pm = end of century.']}
        />
    );
}

export default CenturyClock;
