import React from "react";

import PropTypes from "prop-types";

function ButtonsList({ editSuccessfully }) {
  if (editSuccessfully) {
    return <button/>
  }

  return <button/>
 
}

ButtonsList.propTypes = {
  editSuccessfully: PropTypes.bool,
};

export default ButtonsList;
