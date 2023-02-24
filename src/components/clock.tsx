import { createSignal, For, onCleanup, onMount, Show } from 'solid-js';
import s from './clock.module.scss';

type P = {
    progress: number,
    accent: string,
    delay: number,
    title: string
    desc: string[],
    link?: string
};

const formatTime = (hour: number, minute: number): string => {
    let adjustedHour = hour % 24; 
    let meridiem = 'am';
    if (adjustedHour >= 12) {
        meridiem = 'pm';
    }
    if (Math.floor(adjustedHour) > 12) {
        adjustedHour = adjustedHour - 12;
    }
    let hourStr = String(Math.floor(adjustedHour));
    let minStr = String(Math.floor(minute % 60));
    if (adjustedHour < 10) {
        hourStr = '0' + hourStr;
    }
    if (minute < 10) {
        minStr = '0' + minStr;
    }
    return `${hourStr}:${minStr} ${meridiem}`;
};

function Clock(props: P) {
    const [showDesc, setShowDesc] = createSignal(false);
    const [reveal, setReveal] = createSignal(false);
    const [hover, setHover] = createSignal(false);

    let timeout;

    onMount(() => {
        timeout = setTimeout(() => setReveal(true), props.delay);
    });

    onCleanup(() => clearTimeout(timeout));

    const hourDeg = () => props.progress * 720;
    const minuteDeg = () => ((props.progress * 24) % 1) * 360;

    const hour = () => props.progress * 24;
    const minute = () => (hour() % 1) * 60;

    return (
        <div 
            class={s.clock + ' border-4 border-solid hover:cursor-pointer ' + (reveal() ? s.show : '')}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                "border-color": hover() ? props.accent : '#313737'
            }}
            onClick={() => setShowDesc(prev => !prev)}
        >
            <h1 class={'text-xl ' + s.title}>
                {props.title}
            </h1>
            <Show when={!showDesc()} fallback={
                <div class={s.desc}>
                    <For each={props.desc}>{(desc) => (
                        <p class='text-sm mb-3'>
                            {desc}
                        </p>
                    )}</For>
                    <Show when={props.link}>
                        <a 
                            class='text-blue-300 hover:text-blue-400 hover:cursor-pointer'
                            href={props.link} target="_blank" rel="noopener noreferrer"
                        >
                            view source
                        </a>
                    </Show>
                </div>
            }>
                <div 
                    class={s.digital + ' text-base font-bold'}
                    style={{
                        color: props.accent
                    }}
                >
                    <span>{formatTime(hour(), minute())}</span>
                </div>
                <div class={s.faces}>
                    <div class={s.traditional}>
                        <div class={s.face}>
                            <div 
                                class={s.line1} 
                                style={{ "background-color": props.accent }}
                            />
                            <div class={s.line2} />
                            <div class={s.line3} />
                            <div 
                                class={s.line4} 
                                style={{ "background-color": props.accent }}
                            />
                            <div class={s.line5} />
                            <div class={s.line6} />
                            <div class={s.linecover} />
                            <div 
                                class={s.hand + ' ' + s.hour} 
                                style={{
                                    rotate: `${hourDeg()}deg`,
                                    "background-color": props.accent
                                }}
                            />
                            <div 
                                class={s.hand + ' ' + s.minute} 
                                style={{
                                    rotate: `${minuteDeg()}deg`,
                                    "background-color": props.accent
                                }}
                            />
                            <div 
                                class={s.topcover} 
                                style={{
                                    "background-color": props.accent
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Show>
        </div>
    );
}

export default Clock;
