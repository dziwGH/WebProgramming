import './App.css'

function App() {

  return (
    <body className="min-h-screen bg-gradient-to-r from-purple-400 to-red-300 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-start bg-opacity-50">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img src="me.jpg" alt="Profile" className="w-40 h-40 md:w-60 md:h-80 shadow-md mb-4 md:mb-0"/>
        </div>
        
        <div className="md:w-2/3 text-center md:text-left md:ml-8">
          <h1 className="text-4xl font-bold text-gray-900 font-serif">Andrew Dziwanowski</h1>
          <p className="text-gray-600 mt-2 text-lg">Hey! I'm Andrew! I was born and raised in Bentonville, AR. I'm 22 years old and love listening to music! My dream is to be a critically acclaimed producer as singing and rapping isn't up my alley! Some people that inspire me are bbno$ (baby no money), Malcolm Todd, Maroon 5, Logic, and many more! I also love anything anime related and my favorite shows are Solo Leveling, Cyberpunk: Edgerunners, and One Piece! Thanks for stopping by!</p>
        
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 font-serif">Education</h2>
            <p className="text-gray-600 mt-1 text-lg">WORK IN PROGRESS. Will add more eventually.</p>
          </div>
        
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 font-serif">Contact</h2>
            <p className="text-gray-600 text-lg">Email: <a href="mailto:dziwanowskia@gmail.com" className="text-blue-500 hover:underline">dziwanowskia@gmail.com</a></p>
            <p className="text-gray-600 text-lg">LinkedIn: <a href="https://www.linkedin.com/in/andrew-dziwanowski-b5b077229/" target='_blank' className="text-blue-500 hover:underline">https://www.linkedin.com/in/andrew-dziwanowski</a></p>
            <p className="text-gray-600 text-lg">GitHub: <a href="https://github.com/dziwGH/WebProgramming" target='_blank' className="text-blue-500 hover:underline">github.com/dziwGH/WebProgramming</a></p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App
