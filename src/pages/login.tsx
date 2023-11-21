export default function Login() {
  return (
    <div className=" bg-purple-600 h-screen flex items-center justify-center">
      <div className=" bg-white p-4 rounded-[5px] h-[400px] w-[360px] justify-center ">
        <form className=" w-full flex-col p-3 ">
          <h1 className=" text-3xl pt-10  ">Login</h1>
          <h2 className=" pt-[34px] ">SEU E-MAIL</h2>
          <input
            type="email" placeholder="exemplo@gmail.com" className=" border p-2 w-full rounded "
          />
          <h2 className=" pt-3 ">SUA SENHA</h2>
          <input type="password" placeholder="***********" className=" p-2 border w-full rounded mb-4 "/>
          <button className=" bg-purple-600 w-full text-white p-3 rounded ">Entrar no sistema
          </button>
        </form>
      </div>
    </div>
  );
}
