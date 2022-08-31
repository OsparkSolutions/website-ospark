import React from 'react';
import { NavBar } from './NavBar';
import { MainSection} from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';
import { useWindowSize } from 'toolkit/react/layoutHooks';
function App() { 
  useWindowSize();
  return (
    <div>
      <NavBar></NavBar> 
      <MainSection />
      <OurServices />
      <OurWork />
      <ContactUs />
    </div> 
  );
}

export default App;