import { Fragment } from "react";
import Homebuttons from "./components/UI/Homebuttons";

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
        <p className="bg-yellow-300 px-4 py-4 rounded-xl hover:bg-yellow-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          quaerat voluptatem eveniet ea velit ratione nesciunt aspernatur. Totam
          molestias iure suscipit alias possimus, dolorem quia, dignissimos,
          sequi eius eos a!
        </p>{" "}
        <p className="bg-yellow-300 px-4 py-4 rounded-xl hover:bg-yellow-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          quaerat voluptatem eveniet ea velit ratione nesciunt aspernatur. Totam
          molestias iure suscipit alias possimus, dolorem quia, dignissimos,
          sequi eius eos a!
        </p>{" "}
        <p className="bg-yellow-300 px-4 py-4 rounded-xl hover:bg-yellow-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          quaerat voluptatem eveniet ea velit ratione nesciunt aspernatur. Totam
          molestias iure suscipit alias possimus, dolorem quia, dignissimos,
          sequi eius eos a!
        </p>
      </div>
    </section>
  );
};

export default Home;
