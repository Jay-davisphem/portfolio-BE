import img from '../logo.svg'
export default function About() {
  return (
    <main className='h-[100vh]'>
      <div className='text-white text-center md:border-2 border rounded-lg flex-col md:mt-48 mt-24 mx-2 md:mx-64'>
        <h2 className='text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 '>About <span className='italic'>David Oluwafemi</span></h2>
        <img src={img} className='md:w-96 w-72 m-auto border md:border-2 rounded-full md:p-none' alt='David Oluwafemi Profile pic' />
        <em className='text-lg md:text-2xl text-gray-500'>Fullstack Developer, Software Engineer</em>
        <p className='mx-auto sm:px-4 text-left px-12 md:px-none leading-8 indent-8 tracking-wide mt-6 max-w-lg'>lengthy description hjghjhjf sdkjh f hgf dhjdhj fhgha lujfafjhghjf
        dfjhjjhjfh fjhfadfalhf ;dbj;adhfdls;;kadbfslbd
        fbjfjbsasdfs nsdhjsd dnddjd d dds ghv sds  dbal  labgal hjaldfsda
        sfjbbjfjsas ;al f;lhk a alhk lsaf kaldj dsaks khkshhdksdkjdlkjhjj shhhjghdsasd
        afshjhakjdsfhsj   fgh dgflajfhh glds fhg  lafjagfhgh;ajdg</p>
      </div>
    </main>
  );
}
