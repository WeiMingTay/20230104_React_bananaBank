import React, { useState } from "react";
import "./Zahlungen.css";

const Zahlungen = () => {
	// Eingabe auslesen
	let [eingabe, setEingabe] = useState(0);

	// Kontostand ausgeben
	let [kontostand, setKontostand] = useState(Math.random() * 10000);

	function einzahlen() {
		setKontostand(kontostand + Number(eingabe));
		document.getElementById("input").value = "";
	}
	function auszahlen() {
		setKontostand(kontostand - Number(eingabe));
		document.getElementById("input").value = "";
	}

	return (
		<section className="zahlungen">
			<article>
				<h3>Dein Girokonto</h3>
				<p>{kontostand.toFixed(2)} €</p>
				<input
					type="number"
					id="input"
					placeholder="Geldbetrag eingeben"
					onChange={(e) => {
						setEingabe(e.target.value);
					}}
				/>
				<div>
					<button onClick={einzahlen}>Einzahlen</button>
					<button onClick={auszahlen}>Auszahlen</button>
				</div>
			</article>
		</section>
	);
};

export default Zahlungen;
