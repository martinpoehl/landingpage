import React from 'react'

const About = () => {
  return (
    <div id='contact' className="w-full justify-center mb-10 mt-5">
      <div class="bg-gray-100">
    <div class="container mx-auto md:pt-5">
        
        <div class="mt-20 grid grid-cols-4 lg:mx-40 sm:grid-cols-12 gap-6 px-4 pt-4">
        <div class="col-span-4 sm:col-span-3">
                <div class="bg-white-500 shadow rounded-lg p-4">
                    <div class="flex flex-col items-center">
                        <img src="/assets/me.jpg" class="rounded-full border-2 p-2 z-3 my-6 shrink-0">

                        </img>
                        <h1 class="text-3xl lg:text-3xl xl:text-3xl font-medium text-black-600 leading-normal text-center">Martin Pöhl</h1>
                        <p class="text-xl text-gray-700 mt-5 text-center sm:text-sm">System-Engeener & Webdeveloper</p>
                        
                    </div>
                    <hr class="my-6 border-t border-gray-300"/>
                    <div class="grid grid-flow flex flex-col p-4 justify-center ">
                        <span class="text-md lg:text-2xl xl:text-2xl font-medium text-black-600 leading-normal mb-2 text-center">Skills</span>
                        <ul>
                            <li class="text-sm text-center mb-2 italic">HTML/CSS</li>
                            <li class="text-sm text-center mb-2 italic">JavaScript</li>
                            <li class="text-sm text-center mb-2 italic">React</li>
                            <li class="text-sm text-center mb-2 italic">Node.js</li>
                            <li class="text-sm text-center mb-2 italic">Tailwind Css</li>
                        </ul>
                        <ul>
                            <li class="text-sm text-center mb-2 italic">Python</li>
                            <li class="text-sm text-center mb-2 italic">Django</li>
                            <li class="text-sm text-center mb-2 italic">MySQL</li>
                            <li class="text-sm text-center mb-2 italic">...</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
                <div class="bg-white-500 shadow rounded-lg p-6">
                    <h1 class="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center my-6"><span style={{color: "#f43855"}}>Über mich</span></h1>
                    <p class="text-md text-gray-700">
                        Mein Name ist Martin Pöhl und ich arbeite derzeit im Raum Zürich sowohl als Leiter eines ServiceDesks als auch als System Engineer. In meiner aktuellen Rolle bin ich aktiv an verschiedenen IT-Projekten beteiligt und übernehme auch die Funktion eines Ausbilders. Seit über einem Jahrzehnt bin ich in der IT-Branche tätig und meine Leidenschaft für Programmierung zeigt sich sowohl in meiner Freizeit als auch in meiner beruflichen Laufbahn, wo ich kontinuierlich an der Entwicklung von Web-Applikationen und Websites arbeite. Durch meine langjährige Erfahrung und mein solides Fachwissen bringe ich einen beträchtlichen Mehrwert und setze mich kontinuierlich dafür ein, mich weiterzubilden.
                    </p>
                    <br/>
                    
                    <div class=" gap-6 my-6">
                    <h4 class="text-xl font-bold mb-1">Erfahrung</h4>
                    <p class="text-md text-gray-700">10 Jahre

                    </p>
                        
                        
                    </div>
                    


                    
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About