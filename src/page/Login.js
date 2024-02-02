import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../Component/loader/Loader';
import { db } from '../config/firebase';
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Swal from 'sweetalert2';
export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);
  // const [token, setToken] = useState(null);

  const navigate=useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to shippingdetails
        navigate('/shippingdetails');
      }
    });

    // Clean up the subscription when the component is unmounted
    return () => unsubscribe();
  }, [navigate]);

  const loginData = async () => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, userName, password);
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back!',
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Wrapper className="header-area">
      <Container>
        <Card>
          <h1>Login</h1>
          <LoginData>
            <Input
              type='text'
              placeholder='Username'
              onChange={(e) => setUserName(e.target.value)}
              autoComplete='off'
            />{' '}
            <br />
            <Input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off'
            />{' '}
            <br />
            <div>
              <Button onClick={loginData}>Login</Button>
            </div>
          </LoginData>
        </Card>
      </Container>
      {loading&&<Loader/>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const Container = styled.div`
  border: 2px solid #fff;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

const Card = styled.div`
  text-align: center;
`;

const LoginData = styled.div``;

const Input = styled.input`
  color: #000;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  color: #fff;
  background-color: #4caf50;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
