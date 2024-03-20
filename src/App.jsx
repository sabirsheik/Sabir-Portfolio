import React from "react";
import Header from "./Components/header/header";
import Main from "./Components/main/mainComp";
import { product } from "./data/product";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/skills";
import Form from "./Components/Form/form";
import Footer from "./Components/footer/footer";
import "./App.css";

export default function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Srvices */}
      <div className="services reveal adding">
        <h1 className="h hc">Services</h1>
        <div className="services-container D-f ">
          {product.map((item) => (
            <Services
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              statement={item.statement}
            />
          ))}
        </div>
      </div>
      {/* Skills */}
      <Skills />

      {/* Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </>
  );
}
