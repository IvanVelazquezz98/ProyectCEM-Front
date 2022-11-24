import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";
import axios from "axios";
import ModalError from "../ModalError/ModalError";
import { loginUser } from "../../Redux/Actions";

export default function Login ()  {

  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [modalError , setModalError] = useState(false)
  const [modalErrorMessage , setModalErrorMessage] = useState('')


  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleCloseModalLogin = () => {
    setModalError(false)
  }

  const handleLogin =  async (e) => { 

    try {
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(!input.email)){
        return setModalError(true) , setModalErrorMessage('Debe colocar un email valido')
      } 

      
      if (!input.email) {

        return setModalError(true) , setModalErrorMessage('Debe colocar un email')
      }
     
      if (!input.password) {
        return setModalError(true) , setModalErrorMessage('Debe colocar una contraseña')
      }
      if (input.password.length <= 6) {
  
        return setModalError(true) , setModalErrorMessage('Contraseña invalida')
      }
    let user = {email : input.email , password : input.password}
      
    var json = await axios.post(`http://localhost:3001/api/users/login` , input )
    if (json.data.existe === true) {
      dispatch(loginUser(input))
      window.localStorage.setItem("user", input.email);
      return  navigate('/work')
     
    } else if(json.data.existe === false) {
     return setModalError(true) , setModalErrorMessage('El usuario no existe o contraseña incorrecta')
    }
  } catch (error) {
    return setModalError(true), setModalErrorMessage('Contraseña Incorrecta')
  }
  }



  const handleRedirectRegister = () => {
   navigate('/register')
  };

  return (
    <LoginRoot>
      <Element7 />
      <Text1>Iniciar sesión</Text1>
      {modalError ?
        <div><ModalError error={modalErrorMessage} closeModal={handleCloseModalLogin} />
        </div>
        : null}
      <div >
      </div>
      <WhiteFlexRow>
        <Element2>
          <Element3 />
          <Ellipse3 src={"https://file.rendit.io/n/G1xhmkAGP9bvYXtbJL3r.svg"} />
        </Element2>
        <Text2 >
          <input
            className="input-email"
            type="email"
            placeholder="Email de usuario"
            autoFocus
            color="primary"
            margin="normal"
            variant="outlined"
            label="email"
            value={input.email}
            onChange={handleInputChange}
            name="email"
          />

        </Text2>
      </WhiteFlexRow>
      <WhiteFlexRow1>
        <Element4>
          <FlexRow>
            <Ellipse
              src={"https://file.rendit.io/n/8NiwHRNtCJuBD1q8WUGx.svg"}
            />
          </FlexRow>
          <Element5 />
        </Element4>
        <Text2 >
          <input
            className="input-email"
            placeholder=" Contraseña"
            type={showPassword ? "text" : "password"}
            color="primary"
            margin="normal"
            variant="outlined"
            label="Password"
            value={input.password}
            onChange={handleInputChange}
            name="password"
          />
        </Text2>
        <Image1 onClick={() => handleShowPassword()} src={"https://file.rendit.io/n/yAtEensYEwa1l9CUEsoG.svg"} />
      </WhiteFlexRow1>
      <MahoganyText className="buttonActive" type="button" onClick={(e) => handleLogin(e)}>Entrar</MahoganyText>
      <Text4>
        ¿No estás registrado?{" "}
        <Text5 type="button" onClick={(e) => handleRedirectRegister(e)}>
          Registrate
        </Text5>
      </Text4>
    </LoginRoot>
  );
};



const LoginRoot = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  align-items: center;
`;
const Element1 = styled.img`
  width: 141.48px;
  height: 43px;
  margin: 0px 0px 51px 0px;
`;
const Text1 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 400;
  color: #646562;
  margin: 0px 0px 37px 0px;
`;
const WhiteFlexRow = styled.div`
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.08);
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 67px;
  padding: 14px 12px 12px 15px;
  margin: 0px 0px 20px 0px;
`;
const Element2 = styled.div`
  width: 11px;
  height: 10px;
  position: relative;
  margin: 0px 19px 0px 0px;
`;
const Element3 = styled.div`
  border-width: 1px;
  border-color: #d9d9d9;
  border-style: solid;
  width: 9px;
  height: 3px;
  position: absolute;
  top: 4px;
  left: -1px;
  border-radius: 50px 50px 5px 5px;
`;
const Ellipse3 = styled.img`
  width: 5px;
  height: 5px;
  position: absolute;
  left: 3px;
`;
const Ellipse4 = styled.div`
  background-image: url("https://file.rendit.io/n/NX5tqXTTuKpLasbcJqOh.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.74px 2.51px 3.64px 3.19px;
`;
const Union = styled.img`
  width: 6.31px;
  height: 3.63px;
`;
const WhiteFlexRow1 = styled.div`
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.08);
  width: 281px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 154px;
  padding: 14px 11px 12px 15px;
  margin: 0px 0px 26px 0px;
`;
const Element4 = styled.div`
  width: 11px;
  height: 12.7px;
  align-self: flex-end;
  position: relative;
  margin: 0px 19px 0.3px 0px;
`;
const FlexRow = styled.div`
  border-width: 1px;
  border-color: #d9d9d9;
  border-style: solid;
  width: 9px;
  height: 2.54px;
  display: flex;
  position: absolute;
  top: 3px;
  left: -1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  padding: 2px 0px 1.92px 0px;
`;
const Ellipse = styled.img`
  width: 2.54px;
  height: 2.54px;
`;
const Element5 = styled.div`
  border-width: 1px;
  border-color: #d9d9d9;
  border-style: solid;
  width: 5.62px;
  height: 3.08px;
  position: absolute;
  top: -1px;
  left: 0.69px;
  border-radius: 20px 20px 1px 1px;
`;
const Image1 = styled.img`
  width: 14px;
  height: 12px;
  cursor:pointer;
`;
const MahoganyText = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Blinker;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
  width: 307px;
  height: 19px;
  background-color: #482afa;
  flex-direction: row;
  justify-content: center;
  border-radius: 77px;
  padding: 11px 0px;
  margin: 0px 0px 17px 0px;
  cursor: pointer;
`;
const Text4 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 400;
  color: #8c8c8c;
  margin: 0px 0px 111px 0px;
  white-space: pre-wrap;
`;
const Text5 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 600;
  color: #8c8c8c;
  display: contents;
  cursor: pointer;
`;
const FlexColumn = styled.div`
  height: 154px;
  background-image: linear-gradient(90deg, #f47d42 0%, #f15b64 111%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  align-items: center;
  border-radius: 40px 40px 0px 0px;
  padding: 63px 119px;
`;
const Text6 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 400;
  color: #ffffff;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: center;
`;
const Image2 = styled.img`
  width: 39px;
  height: 40px;
  position: absolute;
  top: 17px;
  left: 17px;
`;
const Image3 = styled.img`
  width: 21px;
  height: 37px;
  position: absolute;
  top: 19px;
  left: 25.5px;
`;
const Text2 = styled.div`
  font-size: 12px;
  font-family: Blinker;
  font-weight: 400;
  color: #d0d0d0;
  width: 100%;
  margin: ${(props) => props.margin};
  display: flex;
`;
const Element6 = styled.div`
  width: 74px;
  height: 74px;
  position: relative;
  flex-grow: 1;
`;
const Element7 = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;
const Ellipse1 = styled.img`
  width: 74px;
  height: 74px;
  position: absolute;
`;