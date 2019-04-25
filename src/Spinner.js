import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader"> {props.message} </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'

};

export default Spinner;

/*
TO USE: 
add <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" /> to index.html
**(https://semantic-ui.com/elements/loader.html) for more options**

import Spinner from "./Spinner";
call <Spinner message="Loading or whatever"/>;
with no message prop it'll just be a blank spinner

*/
