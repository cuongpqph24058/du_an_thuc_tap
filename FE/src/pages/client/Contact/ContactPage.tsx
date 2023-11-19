import { ChangeEvent, useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { BiMessageRoundedError } from "react-icons/bi";
import { FaRegMoneyBillAlt, FaRegNewspaper } from "react-icons/fa";

import { Breadcrumb, Button, Container, Input } from "../../../components";
import { useAddContactsMutation } from "../../../api/contact";
import { message } from "antd";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");

  const [createContact, resultContact] = useAddContactsMutation();

  const sendContact = () => {
    const data = {
      name,
      email,
      phone,
      address,
      content,
    };

    createContact(data)
      .unwrap()
      .then((response) => {
        message.success(response.message);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setContent("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <div className="mt-5">
         
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
