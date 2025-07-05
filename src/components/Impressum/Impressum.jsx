import React from "react";

const Impressum = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>
      <p className="mb-2 font-semibold">Angaben gemäß § 5 TMG</p>
      <p>
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        Deutschland
      </p>
      <p className="mt-4 font-semibold">Kontakt:</p>
      <p>
        E-Mail:{" "}
        <a href="mailto:max@mustermann.de" className="text-blue-600 underline">
          max@mustermann.de
        </a>
      </p>
    </div>
  );
};

export default Impressum;
