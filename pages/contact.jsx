
function contact() {
  return (
    <div>
    <section  className="text-gray-600 body-font relative">
  <div  className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
  </div>
  <div  className="container px-5 py-24 mx-auto flex">
    <div  className="lg:w-1/3 md:w-1/2 bg-slate-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2  className="text-white text-2xl mb-1 font-medium title-font">Reach Out To Us!</h2>
      <p  className="leading-relaxed mb-5 text-gray-400 text-xl">We want to hear about your idea!</p>
      <div  className="relative mb-4">
        <label htmlFor="email"  className="leading-7 text-gray-200">Email</label>
        <input type="email" id="email" name="email"  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div  className="relative mb-4">
        <label htmlFor="message"  className="leading-7 text-gray-200">Message</label>
        <textarea id="message" name="message"  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button  className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
      <p  className="text-xl text-gray-200 mt-3">If you need a faster response than one business day, call our New Mexico office at 575-236-4557.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default contact