import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Albums from "./components/Albums"
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import SignUp from "./components/SignUp";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Sidebar />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/album" element={<Albums />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
