import { ade } from '/src/assets/index.js';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={ade} alt="logo" className="w-14 object-contain" />

        <button type='button' onClick={() => window.open('https://github.com/adefuaad')} className="black_btn">Github</button>

        {/* <button type='button' onClick={() => window.open('https://link-to-your-resume', '_blank')} className="black_btn">Resume</button> */}

      </nav>

      <h1 className="head_text">
        Artificial Intelligence for <br className='max-md:hidden'/>
        <span className='orange_gradient'>Website Synopsis Generation</span>
      </h1>

      <h2 className='desc mb-10'>
        Revolutionizing Summaries: AI-Powered Article Condensation
      </h2>
    </header>
  )
}

export default Hero
