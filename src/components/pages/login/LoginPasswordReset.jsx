import React, { useEffect, useState } from "react";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import Button from "../../Forms/Button/Button";
import { PASSWORD_RESET } from "../../../api/api";
import useFetch from "../../../hooks/useFetch";
import Error from "../../../helper/Error";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState();
  const [key, setKey] = useState();
  const password = useForm();
  const { error, loading, data, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
