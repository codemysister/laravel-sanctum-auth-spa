"use client";

import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const Page = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();

  function getCookie(name) {
    // Ambil semua cookie dan tambahkan "; " di depan untuk memastikan pemrosesan yang konsisten
    const value = `; ${document.cookie}`;

    // Pisahkan cookie berdasarkan nama yang dicari
    const parts = value.split(`; ${name}=`);

    // Jika ditemukan, ambil nilai cookie, jika tidak, kembalikan null
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function register(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      const token = getCookie("XSRF-TOKEN");
      axios
        .post("http://127.0.0.1:8000/register", data, {
          headers: {
            "X-XSRF-TOKEN": token,
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log("Data berhasil dikirim:", response.data);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan:", error);
        });
    });
  }

  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="">name</label>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">password confirmation</label>
        <input
          type="password"
          value={password_confirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <br />
        <button>register</button>
      </form>
    </div>
  );
};

export default Page;
