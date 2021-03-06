import React, { useState, useEffect, forwardRef, useRef } from "react";
import { InputStyled } from "./InputStyled";
import { OuterLayout } from "../../Layout/Layout";
import InputComponent from "../../Components/InputComponent/InputComponent";
// import over from "../../img/over.png";
import { useNavigate } from "react-router-dom";
import { Power3, Power4, gsap } from "gsap";
import under from "../../img/under.png";
// import Card from "../../Components/Card/Card";
// import data from "./data";
const Input = forwardRef(({ children }, ref) => {
  let screen = useRef(null);
  let body = useRef(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    localStorage.setItem("name", JSON.stringify(name));
    navigate("/dashboard");
    if (name === "") {
      alert("you need to input a name");
      navigate("/input");
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut,
    })
      .to(screen, {
        duration: 1.2,
        top: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
      })
      .set(screen, { left: "-100%" })
      .from(ref.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      })
      .to(body, {
        duration: 0.3,
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      });
  }, []);

  return (
    <>
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}></div>
      </div>
      <InputStyled ref={(el) => (body = el)} className="Headd">
        <OuterLayout>
          <div className="input">
            <div className="input-left">
              <img src={under} alt="" />
              {/* <div className="input-left-card">
                {data.map((item, _) => {
                  const { id } = item;
                  return <Card key={id} item={item} />;
                })}
              </div> */}
            </div>
            <div className="input-right">
              <h1>Input name below</h1>
              <form onSubmit={onSubmit}>
                <InputComponent name={name} setName={setName} />
              </form>
              <button onClick={onSubmit}>
                <svg
                  default=""
                  viewBox="0 0 56 56"
                  // xml:space="preserve"
                >
                  <polygon points="31.3,26.8 23.5,19 22.8,19.7 30.6,27.5 22.8,35.3 23.5,36 31.3,28.2 32,27.5"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </OuterLayout>
      </InputStyled>
    </>
  );
});

export default Input;
