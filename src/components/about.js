import React from 'react';
import '../App.css';

class About extends React.Component {
    render() {
        return (
          <div className="About">
            <h1>About</h1>
            <h2>This app is used to create and update the shop database!</h2>
            <p>You may navigate to the Add Stock page on the Nav Bar to begin adding 
              items.
              <p>Any items added will be saved on the MongoDB database.</p>
              <p>To view stock, navigate to the view page</p>
            </p>
          </div>
        );
      }
    }

export default About;