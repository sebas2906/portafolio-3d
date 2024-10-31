import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from '../components/Loader'


const HomeInfo = ({ currentStage, isComputerSelected, setComputerSelection, setCurrentStage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isCaptchaPassed, setCaptchaPass] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setIsOpen(false);
        setComputerSelection(false);
    }, [currentStage]);

    const onChange = (e) => {
        setCaptchaPass(true);
    }

    const sendEmail = (form) => {
        setCaptchaPass(false);
        if (!isCaptchaPassed) {
            console.error('Es obligatorio enviar el captcha');
            setEmailMessage('Es obligatorio enviar el captcha');
            return;
        }
        setLoading(true);
        emailjs.send('service_dfnddwr', 'template_v5ailec', {
            from_name: form.name,
            to_name: 'Sebas',
            from_email: form.email,
            to_email: 's.sebas33@gmail.com',
            message: form.message
        }, 'vjIPgBByr9W6wZqjX').finally((msg) => {
            setLoading(false);
            console.log('Intento de envio: ', msg);
            setEmailMessage('He recibido tu mensaje, estaremos en contacto!');
        });
    }

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const InfoBox = ({ text, link, btnText, children }) => (
        <div className={`rounded-lg p-5 relative m-3 ${isOpen ? 'max-w-prose' : 'w-96'}`}>
            <div className='flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
                <p className='font-medium sm:text-xl text-center text-white mb-2'>{text}</p>
                <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
            </div>
            {isOpen && (
                <div className={'animate__animated animate__fadeIn text-white'}>
                    {children}
                </div>
            )}
            <div className={`w-full h-full absolute top-0 left-0 rounded-lg -z-50 backdrop-blur-lg bg-slate-600/40 animate__animated animate__fadeIn`}></div>
        </div>

    )

    const renderContent = {
        /* 1: (
            <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-4 text-white mx-5'>
                Hi, I am <span className='font-semibold'>Adrian</span> <br /> A Software Engineer from ....
            </h1>
        ), */
        2: (
            <InfoBox text={"3D"} link={"/"}>
                <div>
                    Desarrollando con librerías y herramientas 3d como Three JS con React y Unity desde hace 1 año.
                    Algunos de mis habilidades son: <br></br><br></br>
                    - Texturas y materiales 🧱 <br></br>
                    - Webs interactivas 👋 <br></br>
                    - Videojuegos con Unity 3d 🎮 <br></br>
                    - Aplicaciones interactivas 🕹️ <br></br>
                    <br></br>
                    <Link className="bg-emerald-300 rounded p-1" to="https://play.unity.com/es/games/b1a06d3a-dc2c-4b09-8f3c-945b32a34e65/robert-ball">Demo ▶️</Link>
                </div>
            </InfoBox>
        ),
        3: (
            <InfoBox text={"HTML, CSS y Javascript"} link={"/"}>
                <div>
                    Dominio de tecnologías web con HTML, CSS y Javascript por más de 4 años. Además de aplicaciones de escritorio con Tauri y Electron js.
                    Habilidades a destacar:<br></br><br></br>
                    - Full stack con Node js stack MEAN 🤓<br></br>
                    - Internet of things IOT 🧑‍💻<br></br>
                    - RxJs<br></br>
                    - Chatbots <br></br>
                    - AI 🤖<br></br><br></br>
                    Experiencia: <br></br><br></br>
                    -Firmas de documentos digitales con cryptoJS<br></br>
                    -Software de facturación e impresión de documentos POS para empresas con ElectronJs<br></br>
                    -Software de gestión de hotelería con Tauri<br></br>
                    -Backend servers con docker<br></br><br></br>
                    <Link className="bg-emerald-300 rounded p-1" to="https://sebas2906.github.io/Lista-To-do/">Demo ▶️</Link>
                </div>
            </InfoBox>
        ),
        4: (
            <div className='flex-col'>
                <InfoBox text={"Angular"} link={''}>
                    Más de 4 años de experiencia desarrollando proyectos en Angular, manteniendo y desarrollando en empresas líderes en diferentes áreas.
                    Algunas habilidades a destacar: <br></br> <br></br>
                    - Aplicaciones híbridas con Ionic 📱<br></br>
                    - Aplicaciones web robustas 🦾<br></br>
                    - SSR ⚡<br></br>
                    - Excelentes prácticas 😃<br></br><br></br>
                    Experiencia:<br></br><br></br>
                    -Mantenimiento y desarrollo software ERP<br></br>
                    -Dashboard para medición y captura de parámetros biomédicos<br></br>
                    -Aplicaciones móviles para Android y IOS<br></br>
                    -Landing pages <br></br> <br></br>
                    <Link className="bg-emerald-300 rounded p-1" to="https://sebas2906.github.io/Ionic_app">Demo ▶️</Link>
                </InfoBox>
                <br />
                {!isOpen && <div className='mt-6 text-center font-bold'>📨 Contáctame ⬇️</div>}
            </div>
        ),
        /*    5: (
               <InfoBox text={"Hola! Soy Sebastián Full Stack Dev"} link={''}>
                   Soy Ingeniero en electrónica de profesión y en la búsqueda de realizar mis propias interfaces para mis proyectos me encontré con el desarrollo web, lo que me ha llevado a explorar varias tecnologías las cuales me alinearon a convertirme en full stack developer. <br></br><br></br>
                   El paso por la ingeniería me ha otorgado buenas prácticas en mis habilidades técnicas, buenas bases en matemáticas y pensamiento analítico, un gran background en tecnología y sobre todo la empatía y conexión humana que son claves para organizar y finalizar cualquier proyecto. <br></br><br></br>
                   Después de más de 4 años resolviendo proyectos personales y de varios clientes he adquirido la experiencia necesaria para resolver y planificar proyectos cada vez más exigentes. <br></br><br></br>
                   Contáctame: <br></br><br></br>
                   <form className='text-black font-thin flex justify-evenly gap-3' onSubmit={() => {
                       console.log('Enviando correo...');
                       console.log('Form a enviar: ', form);
                       //sendEmail(form);
                   }}>
                       <div className='w-full'>
                           <input onChange={handleFormChange} className='w-full p-2 rounded' type="email" name="email" value={form.email} placeholder='Ingrese un correo electrónico' /> <br />
                           <input onChange={handleFormChange} className='w-full p-2 rounded mt-2' type="text" name="name" value={form.name} placeholder='Ingrese un nombre o identificación' />
                       </div>
                       <div className='w-full'>
                           <textarea onChange={handleFormChange} className='h-full w-full p-2 rounded' name="message" value={form.message} id="contacto" placeholder='Ingrese un mensaje'></textarea> <br></br><br></br><br />
                       </div>
                       <button type='submit' className="bg-emerald-300 rounded p-1">Enviar</button>
                   </form>
               </InfoBox>
           ) */
    }
    return (
        <>
            {isComputerSelected && (
                <div className={`rounded-lg p-5 relative m-3 ${isOpen ? 'max-w-prose' : 'w-96'}`}>
                    <div className='flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
                        <p className='font-medium sm:text-xl text-center text-white mb-2'>👋 Hola! Soy Sebastián Full Stack Dev</p>
                        <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
                    </div>
                    {
                        isOpen && (
                            <div className={`animate__animated animate__fadeIn text-white`}>
                                Soy Ingeniero en electrónica de profesión y en la búsqueda de realizar mis propias interfaces me encontré con el desarrollo web, lo que me ha llevado a explorar varias tecnologías las cuales me alinearon a convertirme en full stack developer. <br></br><br></br>
                                La carrera me ha dado buenas prácticas en mis habilidades técnicas, buenas bases en matemáticas y pensamiento analítico, un gran background en tecnología y sobre todo la empatía y conexión humana que son claves para organizar y finalizar cualquier proyecto. <br></br><br></br>
                                Después de más de 4 años desarrollando software para clientes he adquirido la experiencia para resolver y planificar proyectos cada vez más exigentes. <br></br><br></br>
                                Contáctame: <br></br><br></br>
                                <form className='text-black font-thin' onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log('Enviando correo...');
                                    console.log('Form a enviar: ', form);
                                    sendEmail(form);
                                }}>
                                    <div className='flex justify-evenly gap-3'>
                                        <div className='w-full flex flex-col justify-center'>
                                            <input onChange={handleFormChange} className='w-full p-2 rounded' type="email" name="email" value={form.email} placeholder='Ingrese un correo electrónico' required />
                                            <input onChange={handleFormChange} className='w-full p-2 rounded mt-2' type="text" name="name" value={form.name} placeholder='Ingrese un nombre o identificación' required />
                                        </div>
                                        <div className='w-full'>
                                            <textarea onChange={handleFormChange} className='h-full w-full p-2 rounded' name="message" value={form.message} id="contacto" placeholder='Ingrese un mensaje' required></textarea> <br></br><br></br><br />
                                        </div>
                                    </div>

                                    <div className='flex mt-3 justify-between gap-3'>
                                        <ReCAPTCHA
                                            sitekey="6Lcz7HAqAAAAAEfvsq5XRh1ReWsWXi6873in-Kmm"
                                            onChange={onChange}
                                        />
                                        <button type='submit' className="bg-emerald-300 rounded p-1 font-bold w-full">
                                            {!isLoading && 'Enviar'}
                                            {isLoading &&
                                                (
                                                    <div className='flex justify-center items-center'>
                                                        <div className='w-20 h-20 border-2 border-opacity-20 border-blu-500 border-t-blue-500 rounded-full animate-spin'></div>
                                                    </div>
                                                )
                                            }

                                        </button>
                                    </div>
                                    {emailMessage && <div className='text-center font-bold mt-2 p-3 bg-slate-500 text-white'>{emailMessage}</div>} {/* Mensaje de respuesta */}
                                </form>
                            </div>
                        )
                    }
                    <div className={`w-full h-full absolute top-0 left-0 rounded-lg -z-50 backdrop-blur-lg bg-green-600/40 animate__animated animate__fadeIn`}></div>
                </div>
            )}
            {!isComputerSelected &&
                (
                    renderContent[currentStage] || null
                )
            }
        </>

    )
    //return (renderContent[isComputerSelected ? 5 : currentStage] || null)
}

export default HomeInfo