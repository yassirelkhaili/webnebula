import Logo from "../utils/logohandler"
import { currentDate } from "../constants/footer"
import socialsContent from "../constants/footer"
import { socialsContentProps } from "../constants/footer"

const Footer = () => {
    return (
        <section className="w-full mt-8">
<footer className="border border-slate-200 bg-slate-50 text-dark shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <Logo />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-slate-50">Resources</h2>
                  <ul className="text-slate-500 dark:text-slate-400 font-medium">
                      <li className="mb-4 ">
                          <a href="https://icons8.com/" className="hover:underline">Icons8</a>
                      </li>
                      <li>
                          <a href="https://techicons.dev/" className="hover:underline">Techicons</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-slate-50">Follow us</h2>
                  <ul className="text-slate-500 dark:text-slate-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-slate-50">Legal</h2>
                  <ul className="text-slate-500 dark:text-slate-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">© {currentDate} <a href="https://Webnebula.pro/" className="hover:underline">WebNebula™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {socialsContent.map((socialsItem: socialsContentProps) => {
                return (
              <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-50">
                {socialsItem.svg}
                <span className="sr-only">{socialsItem.title}</span>
              </a>
                )
              })}
          </div>
      </div>
    </div>
</footer>
    </section>
    )
    }
    
    export default Footer