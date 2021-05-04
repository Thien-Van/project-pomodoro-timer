import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionInfo({ session, focusDuration, breakDuration }) {
  if (session === null) return null;

  const displayCurrent = () => {
    if (session?.label === "Focusing") return minutesToDuration(focusDuration);
    return minutesToDuration(breakDuration);
  };

  const progress = () => {
    if (session?.label === "Focusing") {
      return (
        (focusDuration * 60 - session?.timeRemaining) / (focusDuration * 0.6)
      );
    }
    return (
      (breakDuration * 60 - session?.timeRemaining) / (breakDuration * 0.6)
    );
  };

  const progressNum = progress();
  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session?.label} for {displayCurrent()} minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressNum} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progressNum}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionInfo;
