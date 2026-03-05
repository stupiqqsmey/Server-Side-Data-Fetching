export const revalidate = 5; // ISR interval (seconds)

const timeNow = () => {
  return new Date().toLocaleTimeString();
};

export default function ISRPage() {
  return (
    <div>
      <h1>ISR Demo Page</h1>

      <p>
        Page Generated At:
        <strong> {timeNow()} </strong>
      </p>

      <p>
        This page will regenerate every 10 seconds.
      </p>
    </div>
  );
}