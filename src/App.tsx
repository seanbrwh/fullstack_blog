import { useEffect, useState } from "react";

const getGreeting = async function () {
  const res = await fetch("/api/test");
  return await res.json();
};

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    getGreeting().then((res) => setGreeting(res.greeting));
  });

  return (
    <>
      <h1>Hello World</h1>
      <h2>Greeting : {greeting}</h2>
    </>
  );
}

export default App;
