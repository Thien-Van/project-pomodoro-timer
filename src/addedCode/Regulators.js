import React from "react";
import { minutesToDuration } from "../utils/duration";

function Regulators({
  focusIncrement,
  breakIncrement,
  focusDuration,
  breakDuration,
  noSession,
}) {
  const decreaseFocus = (e) => {
    e.preventDefault();
    focusIncrement(false);
  };

  const decreaseBreak = (e) => {
    e.preventDefault();
    breakIncrement(false);
  };

  const increaseFocus = (e) => {
    e.preventDefault();
    focusIncrement(true);
  };

  const increaseBreak = (e) => {
    e.preventDefault();
    breakIncrement(true);
  };

  const deactivate = !noSession();
  console.log(deactivate);

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocus}
              disabled={deactivate}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocus}
              disabled={deactivate}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreak}
                disabled={deactivate}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreak}
                disabled={deactivate}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulators;
