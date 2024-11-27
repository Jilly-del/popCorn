const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
  gap: "16px",
};
const textStyle = {
  lineHeight: 1,
  margin: "0",
};
export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <span> s: {i + 1}</span>
        ))}
      </div>
      <p>{maxRating}</p>
    </div>
  );
}
