import Header from './components/Header';
import { Container } from './components/styles/Container.styled'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Section from './components/Section';
import content from './content'
import Footer from './components/Footer';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  },
  mobile: "768px",
}

function App() {

  const data = content;
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Container>
        { data.map((item) => (
          <Section key={item.id} {...item}/>
        )) }
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
