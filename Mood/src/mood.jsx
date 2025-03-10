import {useState} from 'react';
import './App.css'

export default function MoodTracker () {

    const [mood, setMood] = useState("😊");
    const [bgcolor, setbgColor] = useState("white")

    const MoodChange = (newMood, newColor) => {
        setMood(newMood);
        setbgColor(newColor);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: bgcolor }}>
          <h1 className="text-2xl font-bold">Mood Tracker</h1>
          <p className="text-lg">Current Mood: {mood}</p>
          <div className="mt-4 space-x-2">
            <button className="px-4 py-2 bg-yellow-400 rounded" onClick={() => MoodChange("😁", "#ffeb3b")}>
              Very Happy
            </button>
            <button className="px-4 py-2 bg-red-400 rounded" onClick={() => MoodChange("😒", "#f44336")}>
              Annoyed
            </button>
            <button className="px-4 py-2 bg-blue-400 rounded" onClick={() => MoodChange("😭", "#2196f3")}>
              Crying
            </button>
            <button className="px-4 py-2 bg-gray-400 rounded" onClick={() => MoodChange("🥱", "#9e9e9e")}>
              Tired
            </button>
          </div>
        </div>
      );

}
