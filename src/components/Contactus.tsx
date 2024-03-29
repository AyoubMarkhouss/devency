import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Letter from "./icons/Letter";

const Contactus: React.FC = () => {
  const form = useRef(null);
  const sendmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_973gltp",
        "template_it657lh",
        form.current ?? "",
        "o5b6L4O0hbKhXDtfE"
      )

      .then(
        () => {
          toast.success("message envoyé!");
        },
        () => {
          toast.error("Quelque chose ne va pas :(");
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact mx-auto max-w-screen-xl relative">
      <div
        className="absolute inset-0 blur-[125px] max-w-lg h-[700px] mx-auto sm:max-w-4xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="container px-2 sm:px-6 md:px-8 lg:px-14 xl:px-36 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6 m-6">
            <h1 className="text-4xl md:font-semibold text-white  lg:text-5xl ">
              Votre collaboration, notre succès commun!
            </h1>
            <div className="">
              <span className="inline-block w-36 md:w-64 h-1 bg-[#9F73AB] rounded-full"></span>
              <span className="inline-block w-14 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
              <span className="inline-block w-5 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
            </div>

            <div className="mt-6 space-y-8 md:mt-8 ">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-lightviolet"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-400 w-72 ">
                  20490 Casablanca, Morocco.
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-lightviolet "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-400 w-72 ">
                  +212 645-353-257
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-lightviolet "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-400 truncate w-72 ">
                  devency.contact@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8 flex items-center">
              <h3 className="text-lightviolet text-lg">Follow us</h3>
              <div className="flex ">
                {/* <Link
                  className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-lightviolet"
                  href="https://www.facebook.com/"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link> */}

                <Link
                  className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-lightviolet"
                  href="https://www.instagram.com/devency_/"
                >
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6 m-5 z-50">
            <div className="w-full p-3 md:px-8 md:py-10 mx-auto overflow-hidden md:bg-[#EEF0E5] bg-slate-50 backdrop-blur-xl rounded-lg  lg:max-w-xl ">
              <div className="mt-3">
                <form className="text-darkbg" ref={form} onSubmit={sendmail}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="">
                      <label>Nom complet</label>
                      <input
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-lightviolet"
                        name="full_name"
                        id="full_name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Téléphone</label>
                      <input
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-lightviolet"
                        name="phone"
                        id="phone"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>E-mail</label>
                    <input
                      className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-lightviolet"
                      name="user_email"
                      id="email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Méssage</label>
                    <textarea
                      className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-lightviolet"
                      id="message"
                      name="message"
                      rows={4}
                      required
                    ></textarea>
                  </div>

                  <div className="mt-6 md:-mb-3 mb-2">
                    <button
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-darkviolet px-5 py-2.5 text-sm font-medium text-white hover:bg-lightviolet focus:outline-none focus-visible:ring-2 focus-visible:ring-darkviolet focus-visible:ring-offset-2"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
      />
      <Letter className="hidden lg:flex md:w-96 md:h-[379px] md:absolute md:-mt-[350px] md:ml-[440px] md:z-10" />
    </div>
  );
};

export default Contactus;
