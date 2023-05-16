import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [typeDate, setTypeDate] = useState("text");

  const handleSetType = () => {
    setTypeDate("date");
  };

  return (
    <div className="register font-serif">
      <div className="title-register">
        <h2>Đăng ký thành viên</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName")} placeholder="Họ và tên" />

        <input {...register("email")} placeholder="Email" />

        <input {...register("password")} placeholder="Mật khẩu" />

        <input
          {...register("confirmPassword")}
          placeholder="Xác nhận mật khẩu"
        />

        <input
          {...register("dateOfBirth")}
          placeholder="Ngày sinh"
          id="date"
          type={typeDate}
          onClick={() => handleSetType()}
        />

        <select {...register("gender")}>
          <option value="female">Nam</option>
          <option value="male">Nữ</option>
          <option value="other">Khác</option>
        </select>

        <div className="box-checkbox ">
          <input type="checkbox" />
          <h6>Chấp nhận điều khoản sử dụng</h6>
        </div>
        <input type="submit" value="Đăng ký" />
      </form>
    </div>
  );
};

export default Register;
