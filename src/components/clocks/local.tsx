import { createSignal, onCleanup } from "solid-js";
import Clock from "../clock";

const SEC_PER_DAY = 3600 * 24;

type P = {
    accent: string,
    delay: number
};

function LocalClock(props: P) {
    const [time, setTime] = createSignal(new Date());
    let interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    onCleanup(() => {
        clearInterval(interval);
    });

    const progress = () => {
        const t = time();
        const totalSeconds = t.getHours() * 3600 + t.getMinutes() * 60 + t.getSeconds();
        return totalSeconds / SEC_PER_DAY;
    };

    return (
        <Clock 
            progress={progress()}
            accent={props.accent}
            delay={props.delay}
            title='Your Time'
            desc='Current time in your timezone'
        />
    );
}

export default LocalClock;
