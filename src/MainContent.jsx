import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const MainContent = () => {
    const [coffeeList,setCoffeeList] = useState([])
    useEffect(()=>{
        fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
)
  .then((response) => response.json())
  .then((data) => {
   setCoffeeList(data)
  })
  .catch((error) => {
    console.log("error",error)
  });
    },[])

    
return (
  <main className="max-w-5xl mx-auto px-6 py-16">

    <div className="text-center max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Our Collection
      </h1>

      <p className="text-grey-50 leading-relaxed">
        Introducing our Coffee Collection, a selection of unique
        coffees from different roast types and origins, expertly
        roasted in small batches and shipped fresh weekly.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <Button>All Products</Button>
        <Button>Available Now</Button>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-10">
      {coffeeList.map((coffee) => (
        <Card
          key={coffee.id}
          coffee={coffee}
        />
      ))}
    </div>

  </main>
);
}

export default MainContent
