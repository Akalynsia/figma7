import React from "react";

const App = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="./Bg.png"
          alt="Background"
          style={{ width: "1968px", height: "945px", zIndex: "1" }}
        />
      </div>
      <div className="absolute top-[50px] left-[400px] w-[350px] h-[350px] border-[45px] border-[#000000] border-opacity-25 rounded-full"></div>
      <div className="absolute top-[250px] left-[619px] w-[581px] h-[443px] bg-[#FFFFFF] bg-opacity-20 rounded-3xl flex flex-col justify-center items-center">
        <div className="text-[50px] font-[700] text-[#FFFFFF] text-opacity-80">
          LOGIN
        </div>
        <form className="flex flex-col items-center justify-center gap-2 mt-4">
          <input
            type="text"
            id
            placeholder="Username"
            className="p-3 w-[440px] h-[59px] bg-[#FFFFFF] bg-opacity-25"
            names
          ></input>
          <input
            type="text"
            id
            placeholder="Password"
            className="p-3 w-[440px] h-[59px] bg-[#FFFFFF] bg-opacity-25"
            name
          ></input>
        </form>
        <div className="flex justify-between mt-8 w-[440px]">
          <button className="w-[250px] h-[50px] bg-[#000000] bg-opacity-70 text-[30px] text-[#FFFFFF] text-opacity-50 font-[700]">
            LOGIN
          </button>
          <div className="flex flex-col items-end">
            <p className="font-[600] text-[20px] text-[#FFFFFF] text-opacity-50">
              Forgot password
            </p>
            <p className="font-[600] text-[20px] text-[#FFFFFF] text-opacity-50">
              Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
