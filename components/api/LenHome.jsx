export const LenHome = function ({ lenguas }) {
  return (
    <>
      {lenguas.map((lengua, index) => (
        <p key={index}>• {lengua}</p>
      ))}
    </>
  );
};
