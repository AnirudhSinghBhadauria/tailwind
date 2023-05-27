import Homebuttons from "./components/UI/Homebuttons";
import { content } from "@/data-bank/homeParagraphs";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="min-h-screen w-full flex flex-col gap-8 justify-center items-center">
        <h1 className="text-9xl text-black font-bold antialiased">
          This, is Tailwind.
        </h1>
        <p className="text-lg text-black font-semibold w-8/12">
          Tailwind CSS is an open source CSS framework. The main feature of this
          library is that, unlike other CSS frameworks like Bootstrap, it does
          not provide a series of predefined classes for elements such as
          buttons or tables.
        </p>

        <section className="flex flex-row items-center gap-2">
          <Homebuttons colored={true}>Explore Tailwind</Homebuttons>
          <Homebuttons colored={false}>Documentation</Homebuttons>
        </section>
      </div>

      <div className="grid grid-cols-3 w-8/12 gap-4 flex-wrap mb-5 text-black">
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          Cources
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          Duration
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          Fees
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300 col-span-2">
          4
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          5
        </section>
      </div>

      <div className="grid grid-cols-3 w-8/12 gap-4 flex-wrap mb-12 text-black">
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          1
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300 col-span-2">
          2
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300 col-span-2">
          4
        </section>
        <section className="py-2 px-4 rounded-lg bg-yellow-300 border-2 border-black hover:bg-yellow-200 transition-all duration-300">
          6
        </section>
      </div>

      <div className="columns-3 w-8/12 text-black mb-36">
        {content.map((paragraph) => (
          <p className="bg-yellow-300 px-4 py-4 rounded-xl hover:bg-yellow-200 hover:rounded-2xl hover:transition-all duration-300">
            {paragraph}
          </p>
        ))}
      </div>

      <div
        className="flex flex-col justify-center items-start py-28 px-28 mb-10 w-fit border-2 border-black rounded-xl
       bg-gray-900 shadow-2xl gap-3"
      >
        <h1 className="text-6xl font-semibold mb-6">This is a Title.</h1>
        <h2 className="text-3xl font-semibold mb-2">This is sub-heading.</h2>
        <p className="text-2xl font-semibold line">This is first paragraph.</p>
        <p className="text-xl font-semibold">This is second paragraph.</p>

        <input className="bg-white px-2 py-1 rounded-md text-black font-semibold" type="text" />

        <div className="flex flex-row space-x-4">
          <label htmlFor="check">I agree to all this</label>
          <input className="bg-blue-400" type="checkbox" id="check" />
        </div>

        <div>
          <select className="text-black px-4 py-1 rounded-md font-semibold " name="select" id="select">
            <option className="font-semibold" value="one">Option One</option>
            <option className="font-semibold" value="two">Option Two</option>
          </select>
        </div>
        <button className="bg-blue-400 text-black px-5 py-1 rounded-lg font-semibold hover:bg-blue-300 transition-all duration-300">
          button
        </button>
      </div>
    </section>
  );
};

export default Home;
