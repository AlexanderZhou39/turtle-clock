import { createSignal, onCleanup } from "solid-js";
import Clock from "../clock";
import { utcToZonedTime } from "date-fns-tz";

const SEC_PER_DAY = 3600 * 24;

type P = {
    accent: string,
    delay: number
};

const getDate = () => {
    return utcToZonedTime(new Date(), 'Antarctica/Vostok');
};

function AntarcticaClock(props: P) {
    const [time, setTime] = createSignal(getDate());
    let interval = setInterval(() => {
        setTime(getDate());
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
            title='Antarctica Time'
            desc="Current time in Antarctica's Vostok zone. Identical to UTC+6."
            link='https://en.wikipedia.org/wiki/Time_in_Antarctica'
        />
    );
}

export default AntarcticaClock;
