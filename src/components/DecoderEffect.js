import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RandomChars = styled.span`
    text-shadow: var(--text-shadow-glow);
    color: var(--accent-500);
`;

const GhostChars = styled.span`
    opacity: 0.4;
`;

const WordSpan = styled.span`
    display: inline-block;
`;

function generateRandomChars(amount, lastAnchorCharacter) {
    if (amount === 1 && lastAnchorCharacter)
        return { randomChars: lastAnchorCharacter };

    const chars = ["+", "?", "<", ">", "*", "@"]; // char decode
    // const chars = ["0", "1"]; // binary 
    let randomChars = "";
    if (lastAnchorCharacter) randomChars += lastAnchorCharacter;

    const totalIterations = amount >= 2 ? amount - 1 : amount;

    for (let i = 0; i < totalIterations; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomChars += chars[randomIndex];
    }

    let anchorCharacter = "";

    if (randomChars.length === 1) {
        anchorCharacter = randomChars;
    } else {
        anchorCharacter = randomChars[1];
    }

    return {
        randomChars,
        anchorCharacter
    };
}

function generateGhostFiller(amount, originalWords) {
    let filler = "";

    for (let i = 0; i < originalWords.length; i++) {
        if (originalWords[i] === " ") {
            filler += " ";
        } else {
            filler += "*";
        }
    }
    return filler.substring(amount, originalWords.length);
}

function DecoderEffectUnit({ children, leadIn }) {
    const cleanwords = useRef();
    const ghostwords = useRef();
    const randomCharacters = useRef();
    const lastAnchorCharacter = useRef();
    const count = useRef(0);
    const interval = useRef();

    useEffect(() => {
        ghostwords.current.textContent = generateGhostFiller(0, children.trim());
        setTimeout(() => {
            interval.current = setInterval(update, 80);
        }, 1000);
        return () => clearInterval(interval.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function update() {
        if (!cleanwords.current || !randomCharacters.current) return;
        const words = children.trim();
        if (count.current >= words.length + leadIn) {
            clearInterval(interval.current);
        }

        if (count.current <= leadIn) {
            // introduction
            const { randomChars, anchorCharacter } = generateRandomChars(
                count.current,
                lastAnchorCharacter.current
            );
            lastAnchorCharacter.current = anchorCharacter;
            randomCharacters.current.textContent = randomChars;
            ghostwords.current.textContent = generateGhostFiller(
                words.length - (words.length - randomChars.length),
                words
            );
        } else if (count.current < words.length + 1) {
            // body
            const { randomChars, anchorCharacter } = generateRandomChars(
                leadIn,
                lastAnchorCharacter.current
            );
            const cleanwordsText = words.substr(0, count.current - leadIn);
            lastAnchorCharacter.current = anchorCharacter;
            cleanwords.current.textContent = cleanwordsText;
            randomCharacters.current.textContent = randomChars;
            ghostwords.current.textContent = generateGhostFiller(
                words.length - (words.length - (randomChars.length + cleanwordsText.length)),
                words
            );
        } else {
            // conclusion
            const calculateAmount = () => {
                const diff = count.current - words.length;
                if (diff === 1) return 2;
                if (diff === 2) return 1;
                return 0;
            };
            const amount = calculateAmount();
            const { randomChars, anchorCharacter } = generateRandomChars(
                amount,
                lastAnchorCharacter.current
            );
            const cleanwordsText = words.substr(0, count.current - leadIn);
            lastAnchorCharacter.current = anchorCharacter;
            cleanwords.current.textContent = cleanwordsText;
            randomCharacters.current.textContent = randomChars;
            ghostwords.current.textContent = generateGhostFiller(
                words.length - (words.length - (randomChars.length + cleanwordsText.length)),
                words
            );
        }
        count.current += 1;
    }

    return (
        <WordSpan>
            <span ref={cleanwords}></span>
            <RandomChars ref={randomCharacters}></RandomChars>
            <GhostChars ref={ghostwords}></GhostChars>
        </WordSpan>
    );
}

function DecoderEffect({ children, leadIn }) {
    const [arraySentence, setArraySentence] = useState([]);

    useEffect(() => {
        setArraySentence(children.trim().split(" "));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        arraySentence.map((word, index) => (
            <span key={index}>
                <DecoderEffectUnit leadIn={leadIn || 3}>{word}</DecoderEffectUnit>
                {" "}
            </span>
        ))
    );
}

export default DecoderEffect;
