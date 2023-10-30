import SkateTricks from '../SkateTricks/SkateTricks'


const Tricks = ({ tricks }) => {
  console.log('trick:', tricks)
  const allTrickCards = tricks.map(trick => (
    <SkateTricks
      key={trick.id}
      id={trick.id}
      name={trick.name}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
    />
  ));
console.log('trickcards:', allTrickCards)
  return (
    <section className='tricks-container'>
      {allTrickCards}
    </section>
  );
};

export default Tricks;
