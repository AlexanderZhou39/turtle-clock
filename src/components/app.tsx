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
import Co2Clock from './clocks/co2';

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
        SeaOtterClock,
        TurtleClock,
        Co2Clock
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
            <h1 class="text-center text-white text-3xl font-bold mt-10 mb-3">
                <img 
                    class='inline-block w-10 h-10 mb-5'
                    src='/android-chrome-192x192.png' alt="turtle emoji" 
                />{' '}
                Turtle Clocks
            </h1>
            <div class='container max-w-5xl mx-auto px-5'>
                <p class='text-white text-left sm:mx-10 md:mx-7 lg:mx-10 mb-8'>
                    An assortment of clocks that aim to re-tell time from another perspective. The beginning of the day signals a beginning, and the end of the day signals an end. Click on a clock to open and close its description.
                </p>
                <p class='text-white text-sm text-left sm:mx-10 md:mx-7 lg:mx-10'>
                    Inspired by: Bastian, M. (2012). Fatally Confused: Telling the Time in the Midst of Ecological Crises. <i>Environmental Philosophy, 9</i>(1), 23-48. https://doi.org/10.5840/envirophil2012913
                </p>
            </div>
            <div class="container max-w-5xl mx-auto px-5 my-10 flex flex-row flex-wrap justify-around gap-6">
                
                <For each={clocks}>{(clock, i) => (
                    <Dynamic component={clock} accent={accents[i() % accents.length]} delay={i() * 150} />
                )}</For>
            </div>
        </>
    );
}

export default App;
