import './App.css';
import {useState} from 'react';

function App() {
    const hodoriImgs = [
        '/imgs/hodori1.png',
        '/imgs/hodori2.png',
        '/imgs/hodori3.png',
        '/imgs/hodori4.png',
        '/imgs/hodori5.png',
    ];

    const grottoImgs = [
        '/imgs/grotto1.png',
        '/imgs/grotto2.png',
        '/imgs/grotto3.png',
        '/imgs/grotto4.png',
        '/imgs/grotto5.png',
    ];

    const [isHodoriOpen, setIsHodoriOpen] = useState(false);
    const [isGrottoOpen, setIsGrottoOpen] = useState(false);

    const handleHodoriOpen = () => {
        setIsHodoriOpen(true);
    };
    const handleHodoriClose = () => {
        setIsHodoriOpen(false);
    };

    const handleGrottoOpen = () => {
        setIsGrottoOpen(true);
    };
    const handleGrottoClose = () => {
        setIsGrottoOpen(false);
    };
    return (
        <>
            <header>
                <h1 className="title">Namkaeun</h1>
                <nav>projects</nav>
            </header>
            <main>
                <div className="container_hodori">
                    <img className="img_hodori" src="/hodori.svg" alt="호도리 사진" onClick={handleHodoriOpen} />
                    {isHodoriOpen && (
                        <div className="description_hodori">
                            <div className="description_title">
                                <p className="subtitle">Local promotion project</p>
                                <h2 className="title">Back to 1988 Olympic Park Retro Festival</h2>
                            </div>
                            <div className="description_subject">
                                <span>-</span>
                                <div>{`Graphic Design \nAdvertising Design \nBrand Design`}</div>
                            </div>
                            <div className="description_contributor">
                                <span>Design :</span>
                                <div>{`Nam Kaein \nIm hyeonji`}</div>
                            </div>
                            <div className="description">
                                {`‘Back to 1988 Olympic Park Retro Festival’ \nis a festival planned as a promotional project
                            for Songpa-gu. It highlights the nostalgia of \nthe 1988 Seoul Olympics. The design
                            incorporates pixel graphics that evoke retro \nvibes from that era, with each pixel
                            representing landmarks found in Songpa-gu.`}
                            </div>
                        </div>
                    )}
                </div>

                <div className="container_grotto">
                    <img className="img_grotto" src="/grotto.png" alt="그로토 사진" onClick={handleGrottoOpen} />
                    {isGrottoOpen && (
                        <div className="description_grotto">
                            <div className="description_title">
                                <p className="subtitle">Sustainable project</p>
                                <h2 className="title">‘Grotto’ from ceramic waste</h2>
                            </div>
                            <div className="description_subject">
                                <span>-</span>
                                <div>Concept Design</div>
                            </div>
                            <div className="description_contributor">
                                <span>Design :</span>
                                <div>Nam Kaein</div>
                            </div>
                            <div className="description">{``}</div>
                        </div>
                    )}
                </div>

                {isHodoriOpen && (
                    <div className="modal_hodori_container" onClick={handleHodoriClose}>
                        <div className="modal_hodori_content" onClick={(e) => e.stopPropagation()}>
                            {hodoriImgs.map((img, idx) => (
                                <img key={idx} width={1000} src={img} alt={`호도리 사진 ${idx + 1}`} />
                            ))}
                            <button className="modal_hodori_close_btn" onClick={handleHodoriClose}>
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {isGrottoOpen && (
                    <div className="modal_grotto_container" onClick={handleGrottoClose}>
                        <div className="modal_grotto_content" onClick={(e) => e.stopPropagation()}>
                            {hodoriImgs.map((img, idx) => (
                                <img key={idx} width={1000} src={img} alt={`그로토 사진 ${idx + 1}`} />
                            ))}
                            <button className="modal_grotto_close_btn" onClick={handleGrottoClose}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}

export default App;
