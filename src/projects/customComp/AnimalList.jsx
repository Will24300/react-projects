import Displayer from "../../components/Displayer";

function AnimalList() {
  const animals = [
    "dog 🐶",
    "cat 🐈",
    "chicken 🐔",
    "cow 🐄",
    "sheep 🐏",
    "horse 🐎",
  ];

  return (
    <div>
      <h1>My Animals</h1>
      <Displayer arr={animals} /> {/* Passing props through */}
    </div>
  );
}
export default AnimalList;
