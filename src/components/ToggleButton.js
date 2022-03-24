import { useState } from "react";

function ToggleButton() {
  const [status, setStatus] = useState(true);
  return (
    <>
      {status && <h1>ToggleButton</h1>}
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        click me
      </button>
    </>
  );
}

export default ToggleButton;
