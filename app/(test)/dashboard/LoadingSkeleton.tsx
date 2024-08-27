// app/dashboard/LoadingSkeleton.tsx

export default function LoadingSkeleton() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ccc",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          width: "80%",
          height: "20px",
          backgroundColor: "#ccc",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          width: "60%",
          height: "20px",
          backgroundColor: "#ccc",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
