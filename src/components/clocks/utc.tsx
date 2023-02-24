import { createSignal, onCleanup, onMount } from "solid-js";
import Clock from "../clock";

const SEC_PER_DAY = 3600 * 24;

type P = {
    accent: string,
    delay: number
};

function UTCClock(props: P) {
    const [time, setTime] = createSignal(new Date());
    let interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    onCleanup(() => {
        clearInterval(interval);
    });

    const progress = () => {
        const t = time();
        const totalSeconds = t.getUTCHours() * 3600 + t.getUTCMinutes() * 60 + t.getUTCSeconds();
        return totalSeconds / SEC_PER_DAY;
    };

    return (
        <Clock 
            progress={progress()}
            accent={props.accent}
            delay={props.delay}
            title='UTC Time'
            desc='Current time in UTC timezone'
            link='https://en.wikipedia.org/wiki/Coordinated_Universal_Time'
        />
    );
}

export default UTCClock;
