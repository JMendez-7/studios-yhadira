export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Blob 1 — rosa cálido, arriba izquierda */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #f5c6d0 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 2 — fuchsia suave, arriba derecha */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-18"
        style={{
          background: "radial-gradient(circle, #b80049 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Blob 3 — rose gold cálido, centro izquierda */}
      <div
        className="absolute top-[45%] -left-32 w-[450px] h-[450px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #f0d5c8 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Blob 4 — crema dorado, centro derecha */}
      <div
        className="absolute top-[35%] -right-24 w-[480px] h-[480px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #e8cfc4 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Blob 5 — fuchsia, abajo centro */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, #e2165f 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Blob 6 — rosa cálido, abajo derecha */}
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-22"
        style={{
          background: "radial-gradient(circle, #f5c6d0 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Dot grid — esquina inferior izquierda, muy sutil */}
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #b80049 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
