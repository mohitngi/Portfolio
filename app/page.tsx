import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Home, FileText, Moon } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[hsl(210,11.1%,3.53%)] text-[hsl(0,0%,98%)]">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl pt-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pt-8 mr-10">
          <div>
            <h1 className="text-5xl font-bold mb-2 text-[hsl(0,0%,98%)]">Hi, Mohit here</h1>
            <p className="text-l text-[hsl(0,0%,63.9%)]">21, i build things on the internet.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[hsl(0,0%,14.9%)]">
              <Image
                src="pfp.png"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover -mt-3"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-3 text-[hsl(0,0%,98%)]">About</h2>
          <p className="text-[hsl(0,0%,63.9%)] mb-4">front-end dev, engineer.</p>
          <p className="text-[hsl(0,0%,63.9%)] mb-4">i like technology and deep science. It's just cool ig.</p>
          <p className="text-[hsl(0,0%,63.9%)] mb-4">
            i study art, history.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-5 text-[hsl(0,0%,98%)]">Some projects I built</h2>

          <div className="mb-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                    src="mdnotes.svg"
                    alt="Markdown Notes Logo"
                    width={32}
                    height={32}
                    className="w-14 h-14 grayscale"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-[hsl(0,0%,98%)]">Markdown Notes</h3>
                    <p className="text-[hsl(0,0%,63.9%)]">React, Typescript, Tailwind CSS</p>
                    <p className="text-[hsl(0,0%,63.9%)] mt-2">
                    A live Markdown editor to create interactive notes.<br />
                    You can preview your notes as you type.
                    </p>
                    <div className="mt-2">
                      <a href="https://markdownotes.vercel.app" className="text-blue-500 text-sm mr-4 hover:text-blue-600" target="_blank">
                        View
                      </a>
                      <a href="https://github.com/mohitngi/markdown-notes" className="text-blue-500 text-sm hover:text-blue-600" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="streamline.svg"
                    alt="StreamLine"
                    width={24}
                    height={24}
                    className="object-contain grayscale "
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-[hsl(0,0%,98%)]">StreamLine</h3>
                    <p className="text-[hsl(0,0%,63.9%)]">Next.js, Tailwind CSS, Radix UI/Shadcn</p>
                    <p className="text-[hsl(0,0%,63.9%)] mt-2">
                   High-performance, responsive SaaS landing page designed to promote a workflow optimization tool. <br />
                    Emphasized scalability and developer efficiency through modular components and type safety.   
                    </p>
                    <div className="mt-2">
                      <a href="https://streamlineworkflow.vercel.app/" className="text-blue-500 text-sm mr-4 hover:text-blue-600" target="_blank">
                        View
                      </a>
                      <a href="https://github.com/mohitngi/streamline" className="text-blue-500 text-sm hover:text-blue-600" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://www.shutterstock.com/image-vector/split-bill-icon-two-arrows-260nw-2542193945.jpg"
                    alt="Bill Splitter"
                    width={50}
                    height={50}
                    className="object-contain grayscale mt-1"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-[hsl(0,0%,98%)] ">Bill Splitter</h3>
                    <p className="text-[hsl(0,0%,63.9%)]">React, Typescript, Tailwind CSS, Shadcn</p>
                    <p className="text-[hsl(0,0%,63.9%)] mt-2">
                   Web application that simplifies group expense splitting.<br></br>
                   Users can add participants, input expenses, and instantly calculate who owes whom.
                    </p>
                    <div className="mt-2">
                      <a href="https://billsplitterr.vercel.app/" className="text-blue-500 text-sm mr-4 hover:text-blue-600" target="_blank">
                        View
                      </a>
                      <a href="https://github.com/mohitngi/bill-splitter" className="text-blue-500 text-sm hover:text-blue-600" target="_blank">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4">Education</h2>

          <div className="mb-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-xs">
                    <img className="grayscale brightness-90" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgn1-jUrO7QQf0UQZBemMOSN-kET13-0UXgw&s" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Govt. Polytechnic Bazpur</h3>
                    <p className="text-gray-400">Computer Science & Engineering</p>
                  </div>
                  <span className="text-gray-400">2022 - 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Typescript</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Git & GitHub</span>
            

          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 text-center">
          <p className="text-gray-400">
            say hello on{" "}
            <a href="https://x.com/mohitngi" className="text-blue-500 hover:underline" target="_blank">
              x dot com
            </a>
          </p>
        </section>

        {/* Social Links */}
        <section className="flex justify-center space-x-4 mb-16">
          <a href="#" className="p-3 bg-gray-900 rounded-full">
            <Home className="h-5 w-5" />
          </a>
          <a href="https://github.com/mohitngi" className="p-3 bg-gray-900 rounded-full" target="_blank">
            <Github className="h-5 w-5"/>
          </a>
          <a href="https://www.linkedin.com/in/mohitngi/" className="p-3 bg-gray-900 rounded-full" target="_blank">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://x.com/mohitngi" className="p-3 bg-gray-900 rounded-full" target="_blank">
            <Twitter className="h-5 w-5" />
          </a>
          <a href = "mailto:mohitnegi2195@gmail.com" className="p-3 bg-gray-900 rounded-full" target="_blank">
            <Mail className="h-5 w-5" />
          </a>
        </section>
      </main>
    </div>
  )
}
