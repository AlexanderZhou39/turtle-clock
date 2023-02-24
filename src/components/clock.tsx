import s from './clock.module.scss';

type Accent = 'g' | 'l' | 'b';

type P = {
    progress: number,
    accent: Accent,
    title: string
    desc: string
} | {
    progress: number,
    accent: Accent,
    title: string
    link: string
};

const accentBg = (accent: Accent) => {
    switch (accent) {
        case 'b':
            return s.blue;
        case 'g':
            return s.green;
        case 'l':
            return s.lavender;
    }
};

function Clock(props: P) {


    return (
        <div class={'text-xl ' + s.clock}>
            <h1 class={s.title}>
                {props.title}
            </h1>
            <div class={s.faces}>
                <div class={s.traditional}>
                    <div class={s.face}>
                        <div class={s.line1 + ' ' + accentBg(props.accent)} />
                        <div class={s.line2} />
                        <div class={s.line3} />
                        <div class={s.line4 + ' ' + accentBg(props.accent)} />
                        <div class={s.line5} />
                        <div class={s.line6} />
                        <div class={s.linecover} />
                    </div>
                </div>
                <div class={s.hourglass}>

                </div>
            </div>
        </div>
    );
}

export default Clock;
