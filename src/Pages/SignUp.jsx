import { Button } from "../Components/Button";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center px-5 py-10 md:py-14 lg:py-20 bg-stone-100 ">
      <main className=" max-w-[85rem] mx-auto py-10">
        <div className=" max-w-[33rem]  w-screen  px-4 md:px-6 lg:px-10 ">
          <div className="w-full  bg-white rounded-[1.5rem] px-5 py-10 shadow-lg">
            <form>
              <div className="flex flex-col gap-2 mb-7">
                <label className="text-sm text-stone-500 font-roboto">
                  First Name
                </label>
                <input
                  type="text"
                  className="h-12 px-4 rounded-lg outline-none bg-[#f8f9fa] text-stone-600 font-roboto active:ring-2 hover:ring-brand-blue focus:ring-offset-2 hover:ring-2 active:ring-brand-blue focus:ring-2 focus:ring-[#28a745]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label className="text-sm text-stone-500 font-roboto">
                  Last Name
                </label>
                <input
                  type="text"
                  className="h-12 px-4 rounded-lg outline-none bg-[#f8f9fa] text-stone-600 font-roboto active:ring-2 hover:ring-brand-blue focus:ring-offset-2 hover:ring-2 active:ring-brand-blue focus:ring-2 focus:ring-[#28a745]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label className="text-sm text-stone-500 font-roboto">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-12 px-4 rounded-lg outline-none bg-[#f8f9fa] text-stone-600 font-roboto active:ring-2 hover:ring-brand-blue focus:ring-offset-2 hover:ring-2 active:ring-brand-blue focus:ring-2 focus:ring-[#28a745]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label className="text-sm text-stone-500 font-roboto">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="h-12 px-4 rounded-lg outline-none bg-[#f8f9fa] text-stone-600 font-roboto active:ring-2 hover:ring-brand-blue focus:ring-offset-2 hover:ring-2 active:ring-brand-blue focus:ring-2 focus:ring-[#28a745]"
                  required
                />
              </div>

              <Button type="secondary">Create Account</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
