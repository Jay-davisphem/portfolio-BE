import ProjectCard from '../components/ProjectCard';
import img1 from '../bg2.jpg'
import img2 from '../bg1.jpg'


export default function Projects() {
  return (
    <main>
      <h2>Projects</h2>
      <section className='flex gap-2.5 flex-wrap'>
      
      <ProjectCard image={img1} name="Femi Lacasta" description='fsfhjhfj fhhfcdhdhfc  cjhjhcf jhnghvcv  xhccdhkjcshsd  dadjkdnhgfv hbkjjjd ds dhdfhksdfkjad   jdshkfdjofdsakjsd  sjdjfjadhkdasjcjhnjsf shfjhdj mnfdsjf mnokf nmfijf  jfsafjnfjsdmjfs  ikfsdfjsddjmnkj khjhlklhg' code_url='https://github.com' deployed_at='https://github.com' />
      <ProjectCard image={img2} name="Femi Lacasta" description='fsfhjhfj fhhfcdhdhfc  cjhjh fjhfjhsjhfjhjafdhsd fdshjhjasfjkfhsjfhjfjs fhjhjfajdhjhsdjfshfjs fhsjfhjh djhjfbjsd fddbhgdhfhk dfhdglsl;jfkjshjfhjhhcf jhnghvcv  xhccdhkjcshsd  dadjk      dnhgfv hbkjjjd ds dhdfhksdfkjad   jdshkfdjofdsakjsd  sjdjfjadhkdasjcjhnjsf shfjhdj mnfdsjf mnokf nmfijf  jfsafjnfjsdmjfs  ikfs      dfjsddjmnkj khjhlklhg' code_url='https://github.com' deployed_at='https://github.com' />
      
      </section>
    </main>
  );
}
