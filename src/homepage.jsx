export default function HomePage() {

    return(<>
        
      
  {/* <div className=" "> */}
    {/* Navbar */}
    <div className="flex justify-around sm:justify-between p-2 my-4 gap-[15px] sm:gap-0 lg:mx-10 md:w-[900px] lg:w-[900px] w-96 sm:w-[748px] sm:mx-2 ">
      <p className="font-bold text-xs sm:text-base p-1 sm:p-3">BrandCrafters</p>
      <nav className="inline-flex items-start gap-5 font-semibold">
        <a href="#Services" className="p-1 sm:p-3 hover:bg-slate-100 rounded-xl text-xs sm:text-base">Service</a>
        <a href="#Portfolio" className="p-1 sm:p-3 hover:bg-slate-100 rounded-xl text-xs sm:text-base">Portfolios</a>
        <a href="#Team" className="p-1 sm:p-3 hover:bg-slate-100 rounded-xl text-xs sm:text-base">Team</a>
        <a href="#Contact" className="p-1 sm:p-3 hover:bg-slate-100 rounded-xl text-xs sm:text-base">Contact</a>
      </nav>
      <button className="hidden sm:inline sm:w-24 mt-0 my-2 p-2 text-xs sm:text-base rounded justify-end items-center border shadow-md border-neutral-200 ">Contact us</button>
    </div>

    <div className="bg-neutral-200 rounded-xl flex-row mx-2 sm:mx-5 lg:mx-10 w-[360px] sm:w-[748px]  lg:w-[900px] xl:w-[1300px]  
  sm:flex-col md:flex-row flex justify-center items-center p-5 h-[400px] lg:h-[600px] sm:h-[600px]  ">
      <p className="text-2xl sm:text-6xl text-black font-semibold w-full sm:w-[500px] ">Welcome to <span className="bg-indigo-600 text-neutral-100 h-[6px] ">B</span>rand<span className="bg-emerald-500 text-neutral-100 h-[8px]">C</span>rafters, where we craft marketing strategies that drive results for your business.</p>
      <div className="flex flex-col sm:flex-row">
        <div>
          <img className="flex self-stretch w-28 sm:w-[250px]" src="../Public/Frame 7.png"  />
          <span className=" flex w-[2px] h-[40px] lg:w-1.5 md:w-[6px] md:h-[124px] bg-emerald-500 rounded top-40 left-[953.93px] -rotate-[20deg]">
          </span>
        </div>
        <div className="lg:ml-10 sm:ml-0 p-0 sm:p-2 lg:p-0 flex-col">
          <img className="flex self-end justify-end w-32 md:w-[250px] sm:pt-6" src="../Public/Frame 8.png" />
          <img className="flex self-center sm:pt-5 sm:w-[180px] w-24 md:w-[250px] lg:pt-1 pt-1" src="../Public/Frame 9.png" /> 
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 hidden sm:flex lg:w-6 " viewBox="0 0 56 56" fill="none">
          <circle cx={28} cy={28} r={28} fill="#5073EF" />
        </svg>
      </div>
    </div>
    {/* <br> */}
    <div className="w-[56px] h-[56px]">
    </div>

    <div className="py-2 flex-col ">
      <img className="w-96 mx-5 lg:mx-10 sm:w-[750px]  lg:w-[100%] xl:w-[1300px]" src="../Public/Frame 4.png" />
      <div className="flex-row w-fit">
        <button className="mx-8 my-6 font-semibold text-lg p-2 border border-neutral-300 rounded-xl">About us</button>
        <div className="inline-flex flex-col items-end gap-[16px] ml-[40px] sm:ml-[400px] lg:ml-[882px] xl:ml-0 xl:w-[1300px] sm:inline-flex ">
          <h3 className="w-96 flex items-end font-bold text-4xl ">At BrandCrafters, we believe in the power of collaboration.</h3>
          <p className=" lg:w-80 w-96 text-base font-normal ">We work closely withour clients to understand their unique challenges and goals, ensuring we developstrategies that align with their business objectives.</p>
        </div>
      </div>
    </div>

    <div className="mt-48 mx-10" id="Services ">
      <button className="mx-8 my-6 font-semibold text-lg p-2 border border-neutral-300 rounded-xl">Our services </button>
    </div>

    <div className="py-5 flex-col mx-10">
      <div className="bg-blue-600 flex flex-row rounded-xl">
        <img className="rounded w-72  lg:w-[450px]" src="../Public/Frame 13.png" />
        <h3 className="lg:w-[600px] p-5 text-xs xl:text-3xl font-semibold text-slate-50">
          We offer a range of services that include social media management, search engine optimization, website design, email marketing, and more.
        </h3>
      </div>
    </div>
    <div className="flex-row md:mx-10 m-0">
      <p className=" mx-0 md:mx-8 my-6 w-[100px] font-semibold text-lg p-2 border border-neutral-300 rounded-xl">About us</p>
      <div className="inline-flex flex-col items-start gap-[16px] ">
        <div className=" ml-[0px] md:ml-[330px] lg:ml-[906px] md:mb-20">
          <h3 className="w-96 flex items-end font-bold text-4xl">We take pride in delivering exceptional results to our clients.</h3>
          <p className=" w-80 text-base font-normal">
            Our team of expertis dedicated to staying up-to-date with the latest marketing trends and technologies, 
            ensuring we always deliver cutting-edge strategies that drive results.</p>
        </div>
      </div>
    </div>
    

    <div>
      <p id="Portfolio" className="py-5 font-semibold mt-40 sm:mt-0 ">See all portfolios -&gt;</p>
    {/* marketing section */}
    <div className="inline-flex items-start w-[240px] mx- md:w-[700px] lg:w-[1340px] gap-[24px] rounded-3xl shadow-xl shadow-slate-500/50">
      <div className="flex flex-col items-start gap-[24px]">               
        <nav className="pl-5  justify-between place-content-between items-center font-bold">
          {/* <a>Hello</a> */}
          <div className="inline-flex items-center gap-3">
            <a className="p-3 hover:bg-slate-100 rounded-xl">Home</a>
            <a className="p-3 hover:bg-slate-100 rounded-xl">Services</a>
            <a className="p-3 hover:bg-slate-100 rounded-xl">About</a>
            <a className="p-3 hover:bg-slate-100 rounded-xl">Portfolio</a>
            <a className="p-3 hover:bg-slate-100 rounded-xl">Testimonials</a>
            <a className="p-3 hover:bg-slate-100 rounded-xl">Contact</a></div>
          {/* <span>Sydney 09:00AM</span> */}
        </nav>  
        <div className="relative p-5 pt-0">
          <img className="opacity-50 contrast-125 brightness-[0.5] h-[650px] w-[250px] sm:w-[1240px]" alt="restaurant" src="https://www1.lovethatdesign.com/wp-content/uploads/2022/09/Love-That-Design-Gypsy-Cup-Cocktail-Bar-Arizona-23-scaled.jpg" />
          <h3 className="absolute top-[30px] p-2 text-4xl font-semibold text-neutral-100 ">Top Uk Restaurants</h3>
          <div className=" opacity-[0.55] absolute bottom-[260px] right-[440px] bg-neutral-100 rounded-[50%] w-100% h-[200px]  ">
            <h3 className=" p-14 text-7xl font-semibold text-neutral-900 ">Contact us</h3>
          </div>
          <h3 className="absolute bottom-[20px] p-2 text-2xl font-semibold text-neutral-100 ">500+ dishes</h3>
          <h3 className="absolute bottom-[20px] right-6 p-2 text-2xl font-semibold text-neutral-100 ">various cuisines</h3>
          <h3 className="absolute bottom-[20px] right-[600px] p-2 text-2xl font-semibold text-neutral-100 md:hidden lg:inline">top chefs</h3>
        </div>              
        <p className=" w-[500px] p-5 pt-0 text-2xl font-serif font-normal text-neutral-900">Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.</p>
        <p className=" w-[500px] p-5 pt-0 text-3xl font-bold text-neutral-1000">Look what we have for you</p>
        <div className="block lg:inline-flex p-5">
          <div>
            <img className="rounded-2xl p-2  w-48 sm:w-[680px] h-[400px] " src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=" />
            <img className="rounded-2xl p-2 w-96 sm:w-[680px] h-[400px]" src="https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg" />
          </div>
          <div>
            <img className="rounded-2xl p-2 w-96 sm:w-[680px] h-[400px] " src="https://tb-static.uber.com/prod/image-proc/processed_images/6adffb6b04fa1ccfd259d438b48126d3/445a4b2618e10f7db95d4f17a85b117d.jpeg" />
            <img className="rounded-2xl p-2 w-96 sm:w-[680px] h-[400px]" src="https://resizer.otstatic.com/v2/photos/wide-xlarge/3/59911384.jpg" />
          </div> 
        </div>
      </div>
    </div>
    </div>
    
    {/* next section */}
    <div>
      <div className="bg-emerald-500 rounded-xl w-96 lg:w-[1300px] h-[750px] mt-96">
      <p className="text-4xl text-slate-50 m-10 mt-2 w-[600px] font-semibold left-8 absolute p-5">At BrandCrafters, we don't just deliver marketing strategies, 
        we build lasting relationships.
      </p>
      <img className="w-[550px] h-[750px] rounded right-8 absolute" src="../Public/Frame 13.png" />
    </div>
    <div className="flex-row flex mt-24" id="Team">
      <button className="border-neutral-300 rounded-xl border h-12 w-24  text-lg font-semibold">Team</button>
      <div className="justify-center items-center pl-20 ml-56 ">
        <p className="text-4xl font-semibold w-96">Meet the team behind BrandCrafters.</p>
        <p className="text-md w-[500px] mt-8">Our team is made up of dedicated marketing professionals who are passionate about delivering results to our clients.</p>
      </div>
    </div>
    </div>
        
    <div>
      <div className="w-[450px] flex-row inline-flex flex-wrap bg-neutral-300 mt-48">
        <img className="w-96 lg:w-[560px] p-5 rounded-3xl" src="https://www.stylecraze.com/wp-content/uploads/2019/05/The-Top-10-Jobs-Dominated-By-Women.jpg" />
        <img className="w-96 lg:w-[790px] p-5 pl-0 rounded-3xl" src="https://foundersguide.com/wp-content/uploads/2018/09/pexels-photo-1249158.jpeg" />
        <img className="w-96 lg:w-[700px] p-5 pt-0 rounded-3xl" src="https://imageio.forbes.com/specials-images/dam/imageserve/370901414/960x0.jpg?height=474&width=711&fit=bounds" />
        <img className="w-96 lg:w-[650px] p-5 pt-0 pl-0 rounded-xl" src="https://media.istockphoto.com/id/1325364139/photo/portrait-of-a-young-businessman-showing-thumbs-up-in-an-office.jpg?s=612x612&w=0&k=20&c=dyKq9Yg3oohKNGdot8bQQp_NqWH0hev7Tny2lAkC-Vo=" />
      </div>
      <button className="text-xl font-semibold border-neutral-200 shadow-lg border rounded-xl p-2 mt-16" id="Contact">Our team</button>
    </div>
      
    <div className="flex flex-col">
        <div className=" ">
          <div className="ml-[300px] mt-36 w-96 lg:w-[600px] ">
            <p className="text-4xl font-bold w-96 lg:w-[800px] ">Get in touch with us today to see how we can help take your marketing to the next level</p>
            <p className="font-semibold self-center flex justify-center text-md w-96 mt-8 ">Let us be your partner in success.</p>
          </div> 
        </div>
        <button className="  w-28 lg:w-32 p-2 lg:ml-[600px] mt-2 lg:mt-16 lg:text-xl inline  text-base font-semibold border-neutral-200 shadow-xl border rounded-xl">Contact Us</button>
    </div>
       
    <div className="w-96 lg:w-[1420px] flex justify-center items-center mx-10">
      <p className="text-7xl font-bold w-[500px]">BrandCrafters</p>
    </div>
  
  {/* </div> */}
  <div className=" mt-[100px]">
    <footer className="w-96 lg:w-[1420px]  bg-gray-950 text-slate-50 ">
      <div className="flex justify-evenly items-center pt-5">
        <div className="flex-col flex font-semibold">
          <a className=" p-3">Careers</a>
          <a className=" p-3">Partnerships</a>
          <a className=" p-3">Terms &amp; Conditions</a>
          <a className=" p-3">About</a>
        </div>
        <div className="flex-col flex font-semibold pt-5">
          <a className=" p-3 w-12 flex"> 
            <img className="mr-2" src="../Public/4202011_email_gmail_mail_logo_social_icon.png" />
            Gmail
          </a>
          <a className=" p-3 w-12 flex"> 
            <img className="mr-2" src="../Public/instagram_2111463.png" /> 
            instagram
          </a>
          <a className=" p-3 w-12 flex"> 
            <img className="mr-2" src="../Public/facebook_5968764.png" />
            facebook
          </a>
          <a className=" p-3 w-12 flex"> 
            <img className="mr-2" src="../Public/linkedin_3536505.png" />
            LinkedIn
          </a>
        </div>
        <div className="flex-col flex font-semibold pt-5">
          <a className=" p-3">Our Story</a>
          <a className=" p-3">Blog</a>
          <a className=" p-3">FAQ's</a>
          <a className=" p-3">Contact Us</a>
        </div>
      </div>
      <div className="flex justify-center items-center pb-10 mt-16">
        <p>© 2024<i> All rights reserved.</i></p>
      </div>
    </footer>
  </div>
  



    </>)

}