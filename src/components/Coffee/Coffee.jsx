const Coffee = ({ coffee }) => {
  const { name, price, test, photo } = coffee || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className=" flex justify-between w-full">
        <p>{test}</p>
        <p>${price}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
