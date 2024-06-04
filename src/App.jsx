import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { MainContent } from './components/main-content/main-content';
import './sass/global/fonts.scss';


export default function App() {

  return (
    <div className='layout'>
      <Header />
      <main>
        <Intro />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

