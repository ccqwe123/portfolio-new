import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    delay?: number;
    className?: string;
    startDelay?: number;
    showCursor?: boolean;
}

const Typewriter = ({ text, delay = 100, className = '', startDelay = 0, showCursor = false }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (!hasStarted) {
            timeout = setTimeout(() => {
                setHasStarted(true);
            }, startDelay);
            return () => clearTimeout(timeout);
        }

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, hasStarted, startDelay, text]);

    return (
        <span className={className}>
            {currentText}
            {showCursor && (
                <span className="cursor-blink ml-1 text-slate-400">|</span>
            )}
        </span>
    );
}

export default Typewriter;
