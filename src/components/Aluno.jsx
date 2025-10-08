import React, { useState } from "react";

export default function Aluno({ nome }) {
  const [presente, setPresente] = useState(false);
  return (
    <>
      <div className="card">
        <label>
          <input
            type="checkbox"
            checked={presente}
            onChange={(e) => setPresente(e.target.checked)} />
          {nome} {presente ? "(Presente)" : "(Ausente)"}

        </label>
      </div>
    </>
  );
}

