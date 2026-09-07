import { useState, useEffect } from 'react';

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[index];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else {
      if (subIndex === currentWord.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    if (words && words[index]) {
      setText(words[index].substring(0, subIndex));
    }
  }, [subIndex, index, words]);

  return text;
}
