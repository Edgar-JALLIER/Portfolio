import { useEffect } from "react";

const FixedCanvas = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const pointer = { x: 0, y: 0 }; // Position de la souris
    const params = {
      pointsNumber: 25,
      color: "rgba(120, 120, 120, 0.5)",
      widthFactor: 0.55,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = { x: pointer.x, y: pointer.y, dx: 0, dy: 0 };
    }

    // Ajuster la taille du canvas (100vh)
    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // 100vh
    };

    // Suivre la position de la souris (clientX / clientY pour position relative au viewport)
    const updateMousePosition = (eX, eY) => {
      pointer.x = eX; // Position X dans le viewport
      pointer.y = eY; // Position Y dans le viewport
    };

    // Ajouter des écouteurs d'événements
    window.addEventListener("mousemove", (e) => {
      updateMousePosition(e.clientX, e.clientY); // Utilisation de clientX / clientY
    });

    window.addEventListener("resize", setupCanvas);

    const update = () => {
      // Dessin de l'animation uniquement dans la zone du canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.strokeStyle = params.color;
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    // Initialisation du canvas et démarrage de l'animation
    setupCanvas();
    update();

    return () => {
      // Nettoyer les écouteurs
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <canvas
      style={{
        position: "fixed", // Fixe le canvas
        top: 0, // Aligne le canvas avec le haut de la fenêtre
        left: 0,
        pointerEvents: "none", // Le canvas ne bloque pas les interactions
        zIndex: 1000, // Au-dessus des autres contenus
      }}
    />
  );
};

export default FixedCanvas;
