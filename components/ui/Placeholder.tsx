"use client";

const Placeholder = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-white/70">{text}</span>
            </div>
        </div>
    );
};

export default Placeholder; 