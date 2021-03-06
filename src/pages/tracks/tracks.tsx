import React from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import style from "./tracks.module.scss";

const Tracks = () => {

    return (
        <>
            <Nav />
            <section className={style.tracks}>
                <h3 className={style.heading}>
                    Using Reference Tracks
                </h3>
                <p className={style.paragraph}>
                    When you are first listening to calibrated headphones or speakers, it is highly recommended to begin by listening to some music you know well. Chances are, by listening to your own music, you have already compensated for your room inaccuracies in your mix, making it sound unusual if calibration is applied.
                </p>
                <p className={style.paragraph}>
                    So let your ears get used to the corrected sound of your system by listening to music that hasn't been produced by you.
                </p>
                <p className={style.paragraph}>
                    When you get accustomed to your new corrected sound, you can try bypassing the plugin to hear the inaccuracies your room was causing before. Use the blue Calibrate button in the plugin to retain the same loudness levels when A/B listening.
                </p>
            </section>
            <Footer />            
        </>
    );
}
export default Tracks;
