import cafeImage from "./assets/images/bg-cafe.jpg";
import MainContent from "./MainContent";
function App() {
  return (
    <div className="min-h-screen">

      {/* Hero background */}
      <div className="h-72 overflow-hidden">
        <img
          src={cafeImage}
          alt="Cafe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative -mt-32">
        <div className="max-w-5xl mx-auto bg-black-50 rounded-xl">
          <MainContent />
        </div>
      </div>

    </div>
  );
}
export default App
