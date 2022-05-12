import Skill from "../components/Skill";
import jav from "../images/javascript.svg";
import py from "../images/python.svg";
import htm from "../images/html.svg";
import css from "../images/css.svg";
import ts from "../images/typescript.svg";
import dj from "../images/django.svg";
import graphql from "../images/graphql.svg";
import c from "../images/c.svg";
import node from "../images/nodejs.svg";
import cpp from "../images/c++.svg";

export default function Skills() {
  const imageNames = [
    ["Javascript", jav],
    ["Css", css],
    ["Html", htm],
    ["Python", py],
    ["Django", dj],
    ["Graphene", graphql],
    ["Nodejs", node],
    ["C", c],
    ["C++", cpp],
    ["Graaphql", graphql],
    ["Typescript", ts],
  ];
  return (
    <main>
      <article>
        <section className="my-24 text-left">
          <h2 className="ml-8 md:ml-72 my-8 md:my-12 text-4xl md:text-5xl">
            Languages
          </h2>
          <section className="flex gap-y-16 gap-x-2 justify-center flex-wrap md:mx-48">
            {imageNames.map(([val, img]) => (
              <Skill name={val} img={img} />
            ))}
          </section>
        </section>
      </article>
    </main>
  );
}
