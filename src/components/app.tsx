import Clock from "./clock";
import './app.scss';

function App() {
    return (
        <>
            <h1 class="text-center text-white mt-10">Turtle Clock</h1>

            <div class="container max-w-5xl mx-auto px-5 mt-10 flex flex-row flex-wrap justify-around">
                <Clock progress={0.5} title='something' desc='something' accent='b' />
                <Clock progress={0.5} title='something' desc='something' accent='g' />
                <Clock progress={0.5} title='something' desc='something' accent='l' />
                <Clock progress={0.5} title='something' desc='something' accent='b' />
                <Clock progress={0.5} title='something' desc='something' accent='g' />
                <Clock progress={0.5} title='something' desc='something' accent='l' />
            </div>
        </>
    );
}

export default App;
