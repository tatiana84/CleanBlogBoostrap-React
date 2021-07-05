import { useState } from 'react';

import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from './components/footer';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 0,
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      dayPost: 'on September 24, 2021'
    },
    {
      id: 1,
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subtitle: '',
      dayPost: 'on September 18, 2021'
    },
    {
      id: 2,
      title: 'Science has not yet mastered prophecy',
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
      dayPost: 'on August 24, 2021'
    },
    {
      id: 3,
      title: 'Failure is not an option',
      subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      dayPost: 'on July 8, 2021'
    }
  ])
  return (
    <>
      <Navbar />
      <Header />
      <Main posts={posts}/>
      <Footer />
    </>
  );
}

export default App;
