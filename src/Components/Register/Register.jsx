import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerUser, createSede } from "../../Redux/Actions";
import ModalError from "../ModalError/ModalError";
import iconUser from '../../Assets/iconUser.svg'
import iconCheck from '../../Assets/iconCheck.svg'
import axios from 'axios';
import styled from "styled-components";
import './RegisterComponents.css'
import passIcon from '../../Assets/iconPassword.svg'
import sedeIcon from '../../Assets/iconSede.svg'
import iconMas from '../../Assets/iconMas.svg'
import iconReturn from '../../Assets/iconReturn.svg'


export default function RegisterUser() {



    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [validate_name, setValidate_name] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
    const [validate_email, setValidate_email] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
    const [validate_password, setValidate_password] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
    const [showPassword, setShowPassword] = useState(false)
    const [showCreateSede , setCreateSede] = useState(false)
    const [allSedes , setAllSedes] = useState(false)
console.log(allSedes)
    const navigate = useNavigate()

    async  function getAllSedes() {
        var json = await axios.get('http://localhost:3001/api/sede/All')
        setAllSedes(json.data)
    }

    useEffect(() => {
        getAllSedes()
      }, []);
    
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        sede: ""
    });
    const [errorsName, setErrorsName] = useState({
        name: "inicio"
    })
    const [errorsEmail, setErrorsEmail] = useState({
        email: "inicio"
    })
    const [errorsPassword, setErrorsPassword] = useState({
        password: "inicio"
    })
    function registerValidateEmail(input) {
        let nombreMax = 60
        let emailMax = 100

        let errorsEmail = {}

        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)) {
            setValidate_email("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
            errorsEmail = ""
            if (input.mail < emailMax) {
                setValidate_email("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
                errorsEmail = ""
            }

            if (!input.email) {
                setValidate_email("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
                errorsEmail = "error"
            }

        } else {
            setValidate_email("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
            errorsEmail = "error"
        }
        return errorsEmail
    }
    function registerValidateName(input) {
        let nombreMax = 60
        let emailMax = 100

        let errorsName = {}

        if (input.name.length < 1) {
            errorsName = "vacio"
            setValidate_name("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
        }
        if (input.name.length > 66 || input.name.length < 8) {
            console.log("largo")
            errorsName = "largo"
            setValidate_name("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
        } else {
            setValidate_name("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
            errorsName = ""
        }
        return errorsName

    }

    function registerValidatePassword(input) {

        let errorsPassword = {}

        if (!input.password) {
            setValidate_password("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
            errorsPassword = "error"
        }
        if (input.password.length <= 6) {
            setValidate_password("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
            errorsPassword = "error"
        } else {
            setValidate_password("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
            errorsPassword = ""
        }
        return errorsPassword
    }

    console.log(input)

    const handleChangeSede = (e) => {
        setInput({
            ...input,
            sede: e.target.value,
        });
        
    }
    const handleInputChangeName = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrorsName(registerValidateName({
            ...errorsName,
            name: e.target.value
        }))

    };
    const handleInputChangeEmail = function (e) {
        setInput({
            ...input,
            email: e.target.value,
        });
        setErrorsEmail(registerValidateEmail({
            ...errorsEmail,
            email: e.target.value
        }))
    };

    const handleInputChangePassword = function (e) {
        setInput({
            ...input,
            password: e.target.value,
        });
        setErrorsPassword(registerValidatePassword({
            ...errorsPassword,
            password: e.target.value
        }))
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const handleRedirectLogin = (e) => {
        navigate('/login')
    }

    async function handleValidateUser(input) {

        try {
            var json = await axios.get('http://localhost:3001/api/users/email/' + input.email)
            if (json.data.existe === true) {
                return setErrorRegister(true), setErrorMessage('El email ingresado ya existe')
            } else {
                if(!showCreateSede){ 
                dispatch(registerUser(input))
                window.localStorage.setItem("user", input.email);
                navigate('/home')}
                else{
                    let sedeCreate = {
                        name: input.sede
                    }
                    await dispatch(createSede(sedeCreate))

                    let userSede = {
                        name: input.name,
                        email: input.email,
                        password: input.password,
                        sede: input.sede
                    }

                    await dispatch(registerUser(userSede))
                    window.localStorage.setItem("user", input.email);
                    navigate('/home')
                }
               
            }
        } catch (error) {
            return setErrorRegister(true), setErrorMessage('Algo salio mal (404)')
        }
    }

    async function handleRegister(e) {
        registerValidateName(input);
        registerValidateEmail(input);
        registerValidatePassword(input)
        let nombreMax = 60
        let emailMax = 100

        if (!input.email) {
            return setErrorRegister(true), setErrorMessage('Necesita colocar un email')

        }
        if (!input.name) {
            return setErrorRegister(true), setErrorMessage('Necesita colocar un nombre de usuario')

        }
        if (input.name < nombreMax) {
            return setErrorRegister(true), setErrorMessage('Su nombre no puede superar los 60 caracteres')


        }
        if (!input.password) {
            return setErrorRegister(true), setErrorMessage('Necesita colocar una contraseña')

        }
        if (input.password.length <= 6) {
            return setErrorRegister(true), setErrorMessage('Su contraseña debe contener mas de 6 caracteres')

        }
        if (!input.sede) {
            return setErrorRegister(true), setErrorMessage('Debe colocar una sede')

        }
        handleValidateUser(input)

    }


    function handleCloseModalError() {
        setErrorRegister(false)

        setInput({
            name: input.name,
            email: input.email,
            password: input.password
        })

    }

    return (
        <div>
            {errorRegister ?
                <><ModalError error={errorMessage} closeModal={handleCloseModalError} /></>
                : null}
            <NewRootRoot>

                <form className="formDivContainerRegister">
                    <Register>
                        <Text1>Contador de Ecos y Mas</Text1>
                        <div className="divContainerInput">
                            <WhiteFlexRow validate={validate_name}>
                                <div className="divContainerInputPassword">

                                    <Image1 src={iconUser} />
                                    <Text2 className="icon"  >
                                        <input
                                            className="inputLogin"
                                            value={input.name}
                                            type="text"
                                            name="name"
                                            maxLength='60'
                                            minLength='8'
                                            placeholder="Nombre de usuario"
                                            onChange={(e) => handleInputChangeName(e)}
                                        />
                                        {errorsName.name === "inicio" ? null :
                                            errorsName !== "vacio" && errorsName !== "largo" ? (<img src={iconCheck} />) : null}
                                    </Text2>
                                </div>
                            </WhiteFlexRow>
                            <WhiteFlexRow validate={validate_email}>
                                <div className="divContainerInputPassword">
                                    <Image1 src={"https://file.rendit.io/n/mAmlgugc1vFKmXnpkc3e.svg"} />
                                    <Text2 className="icon" >

                                        <input type="email"
                                            className="inputLogin"
                                            value={input.email}
                                            name='email'
                                            placeholder="Email"
                                            onChange={(e) => handleInputChangeEmail(e)} />
                                        {errorsEmail.email === "inicio" ? null :
                                            errorsEmail !== "error" ? (<img src={iconCheck} />) : null}
                                    </Text2>
                                </div>
                            </WhiteFlexRow>
                            <WhiteFlexRow validate={validate_password}>
                                <div className="divContainerInputPassword">
                                    <img className="imagePassword" src={passIcon} />
                                    <Text2 className="icon"  >
                                        <input className="inputPassword"
                                            value={input.password}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Contraseña"
                                            name='password'
                                            onChange={(e) => handleInputChangePassword(e)} />
                                        <Image2 className="icon" onClick={() => handleShowPassword()} src={"https://file.rendit.io/n/JACn3ku2NQFDxkH8iY6V.svg"} />
                                    </Text2>

                                </div>
                            </WhiteFlexRow >
                            { !showCreateSede ? <WhiteFlexRow validate={validate_password}>
                                <div className="divContainerInputPassword">
                                    <img className="imagePassword" src={sedeIcon} />
                                    <Text2 className="icon"  >
                                        <select className="inputPassword" onChange={(e) => handleChangeSede(e)}>
                                            <option value='selected' hidden >Sedes      </option>
                                            {allSedes?.length > 0 ? 
                                                allSedes?.map((s) => {
                                                    return (<option value={s?.name} key={s?.id}>{s?.name}</option>)
                                                })

                                             : <option>No se encontraron sedes..</option>}
                                        </select>
                                        <Image2 onClick={(e) => setCreateSede(true , e)} title="Agregar sede" className="icon"  src={iconMas} />
                                    </Text2>
                                </div>
                            </WhiteFlexRow > : 
                            <WhiteFlexRow validate={validate_password}>
                            <div className="divContainerInputPassword">
                                <img className="imagePassword" src={sedeIcon} />
                                <Text2 className="icon"  >
                                <input className="inputPassword"
                                            value={input.sede}
                                            type="text"
                                            placeholder="Nombre de la sede"
                                            name='sede'
                                            onChange={(e) => handleChangeSede(e)} />
                                    <Image2 onClick={(e) => setCreateSede(!createSede, e)} title="Lista de sedes" className="icon"  src={iconReturn} />
                                </Text2>
                            </div>
                        </WhiteFlexRow > }
                            
                            <MahoganyText type='button' onClick={(e) => handleRegister(e)} className="buttonActive">
                                Registrarse
                            </MahoganyText>
                            <Text5>
                                ¿Ya estás registrado?
                                <Text6 type='button' onClick={(e) => handleRedirectLogin(e)}>
                                    Iniciar sesión
                                </Text6>
                            </Text5>
                        </div>
                    </Register>
                </form>

            </NewRootRoot></div>
    );
};


const NewRootRoot = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
align-content: center;
justify-content: center;  
`;

const Register = styled.div`
width: 100%;
height: 526px;
background-color: #ffffff;
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: flex-end;
align-items: center;
align-content: center;
`;
const Element1 = styled.img`
  width: -webkit-fill-available;
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
const Ellipse1 = styled.img`
  width: 5px;
  height: 5px;
  position: absolute;
  left: 3px;
`;
const Image1 = styled.img`
  width: 11px;
  height: 11px;
  align-self: flex-end;
  margin: 0px 19px 1px 0px;
`;
const WhiteFlexRow2 = styled.div`
  box-shadow: ${(prop) => prop.validate};
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 67px;
  padding: 14px 12px 12px 15px;
  margin: 0px 0px 28px 0px;
  border:solid black;
`;
const Element4 = styled.div`
  width: 11px;
  height: 12.7px;
  align-self: flex-end;
  position: relative;
  margin: 0px 19px 0.3px 0px;
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
const Image2 = styled.img`
  width: 14px;
  height: 15px;
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
  height: 40px;
  background-color: #482afa;
  flex-direction: row;
  justify-content: center;
  border-radius: 77px;
  padding: 11px 0px;
  margin: 0px 0px 19px 0px;
  cursor:pointer;
`;
const Text5 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 400;
  color: #8c8c8c;
  margin: 0px 0px 49px 0px;
  white-space: pre-wrap;
`;
const Text6 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 700;
  color: #8c8c8c;
  display: contents;
  cursor : pointer;
`;
const FlexColumn = styled.div`
  height: 280px;
  background-image: linear-gradient(90deg, #f47d42 0%, #f15b64 111%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 40px 40px 0px 0px;
  width: -webkit-fill-available;
  max-width: 428px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: center;
  margin: 0px 0px 61px 0px;
`;
const Image3 = styled.img`
  width: 39px;
  height: 40px;
  position: absolute;
  top: 17px;
  left: 17px;
`;
const Image4 = styled.img`
  width: 21px;
  height: 37px;
  position: absolute;
  top: 19px;
  left: 25.5px;
`;
const WhiteFlexRow = styled.div`
  box-shadow: ${(prop) => prop.validate};
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 67px;
  padding: 14px 12px 12px 15px;
  margin: 0px 0px 28px 0px;
  justify-content: center;
  align-content: center;
`;
const Text2 = styled.div`
  font-size: 15px;
  font-family: Blinker;
  font-weight: 400;
  color: #d0d0d0;
  // margin-right: -30px;
  margin: ${(props) => props.margin};
`;
const Ellipse2 = styled.div`
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
const Text7 = styled.div`
  font-size: 11px;
  font-family: Inter;
  font-weight: 400;
  color: #ffffff;
  margin: ${(props) => props.margin};
  padding-bottom: 30px;
`;
const Element6 = styled.div`
  width: 74px;
  height: 74px;
  position: relative;
  flex-grow: 1;
`;
const Ellipse4 = styled.img`
  width: 74px;
  height: 74px;
  position: absolute;
`;