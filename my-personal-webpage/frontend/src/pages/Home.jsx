import SocialLinks from "../components/SocialLinks";

function Home() {
    return (
        <div className='mt-10 content-center text-[#ffffff]'>
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-8/12">
                    <h1 className="text-5xl font-bold mb-4">
                        Hello! I'm Andrew Dziwanowski!
                    </h1>
                </div>
                <img 
                    src="/public/assets/Prof_Headshot.jpeg" 
                    alt="Professional Headshot"
                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-lg"
                />
            </div>
            <p className="text-4xl m-8 font-semibold" >Welcome to my portfolio page!</p>
            <p className='text-2xl m-5 ml-8'>I am a student at Arkansas Tech University! I will be graduating in May 2025 and I am looking for work! I will be graduating with a Bachelors degree in Information Technology, and an Associates degree in Cyber Security! I also have a Certificate of Proficiency in C++ programming, and a Certificate of Proficiency in Networking!</p>
            <p className='text-2xl m-5 ml-8'>I want to use my skills in communication and problem solving to work as a help desk technician! I really like working with people and solving their problems as I have found in my experience working as a Resident Assistant at Arkansas Tech University.</p>

            <div className="pt-10 text-white">
                <SocialLinks />
            </div>
            

        </div>
    )
}

export default Home;