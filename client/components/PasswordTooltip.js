import React from "react";

import ReactTooltip from "react-tooltip";

export default function PasswordTooltip() {
  return (
    <div data-tip data-for="passwordTip" className="tooltip-password is-small">
      <span className="icon  is-right">
        <i className="fas fa-info-circle" />
      </span>

      <ReactTooltip id="passwordTip" place="bottom" effect="solid">
        Strong passwords are at least 10 characters in length and have a <br />
        combination of lowercase, uppercase, numbers, and special characters
      </ReactTooltip>
    </div>
  );
}
