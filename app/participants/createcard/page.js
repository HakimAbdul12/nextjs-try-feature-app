import NewCard from "@/app/components/createCard";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-white"></h1>
      <div className="container">
        <div className="cardContainer">
          <NewCard/>
        </div>
      </div>
    </div>
  );
}
