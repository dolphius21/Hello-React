const BirthdayItem = ({ list }) => {
  return (
    <>
      {list.map((strawhat) => {
        const { id, name, age, birthday, image } = strawhat;
        return (
          <article key={id} className="birthday">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default BirthdayItem;
