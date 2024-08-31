import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div className="tw-flex-1 tw-h-screen sm:tw-block md:tw-flex xl:tw-flex lg:tw-flex 2xl:tw-flex">
      <div className="tw-min-h-52 tw-w-50 tw-hidden sm:tw-hidden md:tw-block lg:tw-block xl:tw-block 2xl:tw-block">
        <img
          src="/assets/login/login.png"
          alt=""
          className="tw-h-screen tw-w-screen"
        />
      </div>
      <div className="tw-w-full tw-h-full tw-relative">
        <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center">
          <div className="tw-w-[80%] md:tw-w-96">
            <img
              src="./assets/logo.png"
              alt="logo"
              className="tw-h-24 tw-w-36"
            />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
