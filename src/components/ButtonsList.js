import React from "react";

import PropTypes from "prop-types";

function ButtonsList({ addSuccessfully }) {
  if (addSuccessfully) {
    return <button/>
  }

  return <button/>
 
}

ButtonsList.propTypes = {
  addSuccessfully: PropTypes.bool,
};

export default ButtonsList;
