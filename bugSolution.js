```javascript
import { useRoutes } from 'react-router-dom';

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutLayout/>}>
        <Route path="/about/contact" element={<Contact />} />
    </Route>
  </Routes>
);

function App() {
  return routes
}

function AboutLayout() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    )
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }

export default App; 
```