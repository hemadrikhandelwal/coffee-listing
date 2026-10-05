export default function Card({ coffee }) {
  return (
    <div className="relative">

      {/* Image */}
      <div className="relative">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-40 object-cover rounded-xl"
        />

        {/* Popular */}
        {coffee.popular && (
          <span className="absolute top-2 left-2 bg-yellow-50 text-black-100 text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Product information */}
      <div className="mt-3">

        {/* Name + price */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-base">
            {coffee.name}
          </h2>

          <span className="bg-teal-50 text-black-100 text-xs font-bold px-2 py-1 rounded">
            {coffee.price}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-sm">

          {coffee.rating ? (
            <>
              <span className="text-yellow-50">★</span>
              <span className="font-bold">{coffee.rating}</span>
              <span className="text-grey-50">
                ({coffee.votes} votes)
              </span>
            </>
          ) : (
            <>
              <span className="text-grey-50">☆</span>
              <span className="text-grey-50">
                No ratings
              </span>
            </>
          )}

        </div>

        {/* Sold out */}
        {!coffee.available && (
          <p className="text-orange-50 text-sm font-bold mt-1">
            Sold out
          </p>
        )}

      </div>
    </div>
  );
}