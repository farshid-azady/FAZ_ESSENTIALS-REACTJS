import ReactImg from '../assets/react-core-concepts.png';
const reactDescription = ['FUNDAMENTAL', 'CRUCIAL', 'STATE', 'PROPS'];
function getRandomDescription(max) {
    return Math.floor(Math.random() * max + 1);
  }
  function Header() {
    const title = reactDescription[getRandomDescription(3)];
  
    return (
      <header>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {title} react concepts you will need for almost any app you are going to
          build!
        </p>
      </header>
    );
  }
  export default Header;