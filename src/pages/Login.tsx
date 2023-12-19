import ctaLogo from "../assets/images/cta-logo-one.svg";
import ctaLogo2 from "../assets/images/cta-logo-two.png";

const Login = () => {
  return (
    <div className=" flex h-screen flex-col overflow-hidden text-center">
      <section className="flex h-full min-h-[100vh] w-full flex-col items-center justify-center bg-login px-[150px] ">
        <div className=" max-w[650px] col mb-4 ml-auto mr-auto mt-0 flex w-full flex-wrap items-center justify-center">
          <img
            src={ctaLogo}
            alt=""
            className="min-h-1 block w-full max-w-[600px] "
          />
          <a
            href="*"
            className="mb-[12px] w-full rounded-[4px] bg-[#0063e5] px-[30px] py-[17px] text-center text-[18px] font-bold uppercase tracking-widest text-white transition duration-200 ease-in-out hover:bg-[#0483ee] "
          >
            GET ALL THERE
          </a>
          <p className="mx-0 mb-[24px] text-[12px] leading-6 tracking-wider ">
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription.As fo 03/25/22, the price of Disney+ and
            The Disney Bundle will increase by $1. Make your experience more
            seamless by linking your Disney+ and ESPN+ subscriptions.
          </p>
          <img
            src={ctaLogo2}
            alt=""
            className="min-h-1  mb-5 inline-block w-full max-w-[600px] align-bottom "
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
