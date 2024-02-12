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
                        <img src="/assets/me.jpg" class="w-40 h-40 bg-gray-300 rounded-full my-4 shrink-0">

                        </img>
                        <h1 class="text-xl font-bold">Martin Pöhl</h1>
                        <p class="text-gray-700 mt-5 text-center">Webdeveloper & System Engeener</p>
                        
                    </div>
                    <hr class="my-6 border-t border-gray-300"/>
                    <div class="grid grid-flow flex flex-col p-4 justify-center ">
                        <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul>
                            <li class="mb-2">HTML/CSS</li>
                            <li class="mb-2">JavaScript</li>
                            <li class="mb-2">React</li>
                            <li class="mb-2">Node.js</li>
                            <li class="mb-2">Tailwind Css</li>
                        </ul>
                        <ul>
                            <li class="mb-2">Python</li>
                            <li class="mb-2">Django</li>
                            <li class="mb-2">MySQL</li>
                            <li class="mb-2">...</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
                <div class="bg-white-500 shadow rounded-lg p-6">
                    <h2 class="text-xl font-bold mb-4 flex justify-center items-center gap-6 my-6">Über mich</h2>
                    <p class="text-gray-700">Mein Name ist Martin Pöhl und derzeit bin ich im Raum Zürich tätig, sowohl als Leiter eines ServiceDesks als auch als System Engineer. In meiner gegenwärtigen Position bin ich an diversen IT-Projekten beteiligt und fungiere auch als Ausbilder. Ich bin seit über 10 Jahren in der IT tätig. Meine Leidenschaft für die Programmierung zeigt sich sowohl in meiner Freizeit als auch in meiner beruflichen Tätigkeit, wo ich an der Entwicklung von Web-Applikationen und Websites arbeite. Mit meiner langjährigen Erfahrung und meinem fundierten Wissen in der IT-Branche bringe ich eine grossen Mehrwert und bilde mich stets weiter.

                    </p>

                    
                    <div class=" gap-6 my-6">
                    <h4 class="font-bold mb-1">Erfahrung</h4>
                    <p class="text-gray-700">10 Jahre

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