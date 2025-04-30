import React, { useEffect, useRef, useState } from "react";

export default function TypingRoles({
    roles = [
        "Web Developer",
        "Freelancer",
        "React Enthusiast",
        "UI/UX Learner",
        "Tech Explorer",
    ],
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBeforeDeleting = 1500,
    delayBeforeTyping = 500,
}) {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        if (isPaused) return;
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        timeoutRef.current = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                // if we reached at the end of word
                if (charIndex >= currentRole.length - 1) {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setIsPaused(false);
                    }, delayBeforeDeleting);
                }
            } else {
                //Deleting
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                // if we deleted whole word
                if (charIndex <= 1) {
                    setIsDeleting(false);
                    setIsPaused(true);
                    setTimeout(() => {
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                        setIsPaused(false);
                    }, delayBeforeTyping);
                }
            }
        }, speed);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [charIndex, isDeleting, isPaused, roleIndex, roles, typingSpeed, deletingSpeed, delayBeforeDeleting, delayBeforeTyping]);

    if (!roles.length) {
        return null;
    }

    return <div className="text-2xl md:text-3xl font-semibold text-white mt-4" aria-label={`Cycling through roles: ${roles.join(", ")}`}
        role="text">A &nbsp;
        <span className="text-indigo-500">{text}</span>
        <span className="inline-block w-1 h-8 md:h-10 ml-1 bg-indigo-700 animate-blink">
            &nbsp;
        </span>
    </div>;
}
