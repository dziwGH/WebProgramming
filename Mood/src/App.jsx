import { useState } from 'react';
import './App.css';

export default function App() {
    const [mood, setMood] = useState("😊");
    const [bgcolor, setbgColor] = useState("white");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [memory, setMemory] = useState("");
    const [songName, setSongName] = useState("");

    const moodDetails = {
        "😁": {
            description: "I feel happy because of the people around me.",
            link: "https://www.youtube.com/watch?v=9WHtkfKnZ-w",
            songName: "Spin you round - Rocco",
            memory: "I remember hanging out and having a good time with my friends."
        },
        "😒": {
            description: "I feel annoyed when I don't feel heard.",
            link: "https://www.youtube.com/watch?v=k-k2_Liofy8",
            songName: "Messy - Lola Young",
            memory: "When I use to talk to my old friends, sometimes it did not feel like they were listening to me."
        },
        "😭": {
            description: "Crying helps me release my emotions.",
            link: "https://www.youtube.com/watch?v=uGScLpU2I8k",
            songName: "I'm Gonna Find Another You - John Mayer",
            memory: "I cry when I feel lost or helpless."
        },
        "🥱": {
            description: "I feel tired after a long day",
            link: "https://www.youtube.com/watch?v=R40i7E3FyW0",
            songName: "Beanie - Chezile",
            memory: "I remember feeling exhausted because of stuff that was going on between me and my friends.ss"
        }
    };

    const MoodChange = (newMood, newColor) => {
        setMood(newMood);
        setbgColor(newColor);
        setDescription(moodDetails[newMood].description);
        setLink(moodDetails[newMood].link);
        setMemory(moodDetails[newMood].memory);
        setSongName(moodDetails[newMood].songName);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: bgcolor }}>
            <h1 className="text-2xl font-bold font-mono">Mood Tracker</h1>
            <p className="text-lg font-mono">Current Mood: {mood}</p>
            <p className="mt-2 font-mono">{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-mono">{songName}</a>}
            <p className="mt-2">{memory}</p>
            <div className="mt-4 space-x-2">
                <button className="px-4 py-2 bg-yellow-400 rounded" onClick={() => MoodChange("😁", "#ffeb3b")}>Very Happy</button>
                <button className="px-4 py-2 bg-red-400 rounded" onClick={() => MoodChange("😒", "#f44336")}>Annoyed</button>
                <button className="px-4 py-2 bg-blue-400 rounded" onClick={() => MoodChange("😭", "#2196f3")}>Crying</button>
                <button className="px-4 py-2 bg-gray-400 rounded" onClick={() => MoodChange("🥱", "#9e9e9e")}>Tired</button>
            </div>
        </div>
    );
}
