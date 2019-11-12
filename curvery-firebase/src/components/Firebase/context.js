import React from 'react';

/* 
use React's Context API to provide a Firebase instance once at the top-level
of your component hierarchy
*/
const FirebaseContext = React.createContext(null);
/* 
The createContext() function essentially creates two components.
The FirebaseContext.Provider component is used to provide a Firebase instance 
once at the top-level of your React component tree,
which we will do in this section; and the FirebaseContext.Consumer component
is used to retrieve the Firebase instance if it is needed in the React component. 
*/

//  higher-order component 
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {/* Le pega los props del componente a crear que dentro viene con sus propios props */}
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;