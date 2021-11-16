import React, { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import "../index.css";


function AnimatedTitles(prop) {
    const [state, setState] = useState();

    const el = useCallback(node => {
        if (!node) return;

        const myTitle = node.children[0];
        const mySubtitle = node.children[1];
        const myParagraph = node.children[2];

        setState(state => [myTitle, mySubtitle, myParagraph]);
    }, []);

    useEffect(() => {
        if (!state) return;

        gsap.set(state, { autoAlpha: 0 });

        const tl = new gsap.timeline();
        tl.to(state[0], { autoAlpha: 1, duration: 1 });
        tl.to(state[1], { autoAlpha: 1, duration: 1 });
        tl.to(state[2], { autoAlpha: 1, duration: 1 });
    });
    return (<div className="App" ref={el}>
        <h1 className="Letra">{prop.value}</h1>
    </div>)
}

export default AnimatedTitles;