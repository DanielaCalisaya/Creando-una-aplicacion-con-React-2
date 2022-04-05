import React from 'react';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Footer from './Footer';

const ContentWrapper = () => {
    
return (
  
  /* Content Wrapper */
	<div id="content-wrapper" className="d-flex flex-column">

    {/* Main Content */}
    <div id="content">

      <TopBar/>
      <ContentRowTop/>

    </div>
    {/* End of MainContent */}

    <Footer/>

  </div>
  /* End of Content Wrapper */

  )
}

export default ContentWrapper;