import { For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import UTCClock from './clocks/utc';
import LocalClock from './clocks/local';
import AntarcticaClock from './clocks/antarctica';
import './app.scss';
import DecadeClock from './clocks/decade';
import CenturyClock from './clocks/century';
import LongNowClock from './clocks/longNow';
import TurtleClock from './clocks/turtle';
import SeaOtterClock from './clocks/seaOtter';

const shuffle = (array: string[]) => {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function App() {
    const clocks = [
        LocalClock,
        UTCClock,
        AntarcticaClock,
        DecadeClock,
        CenturyClock,
        LongNowClock,
        TurtleClock,
        SeaOtterClock
    ];

    const accents = [
        '#0496ff',
        '#779be7',
        '#1ea896',
        '#62a87c',
        '#c179b9',
        '#ffbf00',
        '#87a878',
        '#17bebb',
        '#d88373',
    ];

    shuffle(accents);

    return (
        <>
            <h1 class="text-center text-white text-3xl font-bold mt-10">
                <img 
                    class='inline-block w-10 h-10 mb-5'
                    src='/android-chrome-192x192.png' alt="turtle emoji" 
                />{' '}
                Turtle Clocks
            </h1>

            <div class="container max-w-5xl mx-auto px-5 mt-10 flex flex-row flex-wrap justify-around gap-6">
                <For each={clocks}>{(clock, i) => (
                    <Dynamic component={clock} accent={accents[i() % accents.length]} delay={i() * 150} />
                )}</For>
            </div>
        </>
    );
}

export default App;
