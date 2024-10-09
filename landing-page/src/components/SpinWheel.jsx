import React, { useEffect, useRef, useState } from 'react';
import './SpinWheel.css';

const sectors = [
  { color: "#FFBC03", text: "#333333", label: "10% off", size: 7 },
  { color: "violet", text: "#333333", label: "12.5% off", size: 4 },
  { color: "green", text: "#333333", label: "15% off", size: 3 },
  { color: "teal", text: "#333333", label: "17.5% off", size: 2.5 },
  { color: "aqua", text: "#333333", label: "20% off", size: 2 },
  { color: "lightblue", text: "#333333", label: "25% off", size: 1.5 },
  { color: "pink", text: "#333333", label: "50% off", size: 1 },
  { color: "magenta", text: "#333333", label: "100% off", size: 0.5 },
];

const SpinWheel = () => {
  const canvasRef = useRef(null);
  const [angVel, setAngVel] = useState(0);
  const [ang, setAng] = useState(0);
  const [spinButtonClicked, setSpinButtonClicked] = useState(false);
  const [spinVal, setSpinVal] = useState(null);
  const [dia, setDia] = useState(600); // Initial diameter

  const updateDimensions = () => {
    const newDia = window.innerWidth < 600 ? window.innerWidth * 0.8 : 600;
    setDia(newDia);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const rad = dia / 2;
  const friction = 0.99;

  const getIndex = () => {
    const rawIndex = Math.floor(sectors.length - (ang / (2 * Math.PI)) * sectors.length);
    return rawIndex % sectors.length; 
  };

  const drawSector = (ctx, sector, i) => {
    const arc = (2 * Math.PI) / sectors.length;
    const angle = arc * i;

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, angle, angle + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();

    const fontSize = Math.max(12, dia / 30);
    ctx.translate(rad, rad);
    ctx.rotate(angle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = sector.text;
    ctx.font = `bold ${fontSize}px 'Lato', sans-serif`;
    ctx.fillText(sector.label, rad - 10, 10);
    ctx.restore();
  };

  const rotate = (ctx) => {
    ctx.canvas.style.transform = `rotate(${ang - Math.PI / 2}rad)`;
  };

  const frame = (ctx) => {
    if (!angVel && spinButtonClicked) {
      const finalIndex = getIndex();
      const validIndices = [0, 1, 2, 3, 4]; // Valid indices for stopping

      // Only stop if we land on one of the valid indices
      if (validIndices.includes(finalIndex)) {
        setSpinVal(sectors[finalIndex].label);
        setSpinButtonClicked(false);
        return;
      } else {
        // Continue spinning if we didn't land on a valid index
        setAngVel(0.5); // Set a minimum speed to continue spinning
      }
    }

    if (angVel > 0) {
      const newVel = angVel * friction;
      setAngVel(newVel < 0.002 ? 0 : newVel);
    }

    setAng((prev) => {
      const newAngle = (prev + angVel) % (2 * Math.PI);
      rotate(ctx);
      return newAngle;
    });
  };

  const engine = (ctx) => {
    frame(ctx);
    requestAnimationFrame(() => engine(ctx));
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    sectors.forEach((sector, i) => drawSector(ctx, sector, i));
    engine(ctx);

    const spinButton = () => {
      if (!angVel) {
        setAngVel(Math.random() * 0.5 + 0.25);
        setSpinButtonClicked(true);
        setSpinVal(null); // Reset spin value when spinning starts
      }
    };

    const spinButtonElement = document.getElementById("spin");
    spinButtonElement.addEventListener("click", spinButton);

    return () => {
      spinButtonElement.removeEventListener("click", spinButton);
    };
  }, [angVel, dia]);

  return (
    <div className='spin-container'>
      <div id="spin_the_wheel" data-aos="fade-right">
        <canvas ref={canvasRef} width={dia} height={dia}></canvas>
        <div id="spin">SPIN</div>
      </div>
      <div className="right">
        <p className="screenshot-instruction">Take a screenshot of the spinner</p>
        <div className={`spinner-box ${spinVal ? 'show' : ''}`}>
          {spinVal || "Spin the wheel!"}
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
