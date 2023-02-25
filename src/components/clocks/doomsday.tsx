import Clock from "../clock";

type P = {
    accent: string,
    delay: number
};

function DoomsDayClock(props: P) {
    const progress = (3600 * 24 - 90) / (3600 * 24);

    return (
        <Clock 
            progress={progress}
            accent={props.accent}
            delay={props.delay}
            title='Doomsday Clock'
            desc={[
                'Based on the Doomsday Clock of the Bulletin of Atomic Scientists.'
            ]}
            link='https://thebulletin.org/doomsday-clock/current-time/'
        />
    );
}

export default DoomsDayClock;
