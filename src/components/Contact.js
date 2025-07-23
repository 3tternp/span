import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");

  try {
    let response = await fetch("https://basnetprem.com.np/#contact", {  // ✅ update this to your deployed backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    const result = await response.json();
    setFormDetails(formInitialDetails);
    setButtonText("Send");

    if (response.ok) {
      setStatus({ success: true, message: '✅ Message sent successfully!' });
    } else {
      setStatus({
        success: false,
        message: result?.message || '⚠️ Something went wrong, try again later.',
      });
    }
  } catch (error) {
    setButtonText("Send");
    console.error("❌ Fetch error:", error);
    setStatus({
      success: false,
      message: '❌ Could not connect to server. Please try again later.',
    });
  }
};
