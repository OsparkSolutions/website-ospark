import React from 'react';
import { NavBar } from './NavBar';
import { MainSection} from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';

function App() {
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