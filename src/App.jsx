import Box from '@mui/material/Box';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function App() {


  return (
    <>
      <Header />
      <Box component="section" sx={{ p: 2 }}>
        <MainContent />
      </Box>
      <Footer />
    </>
  )
}

export default App