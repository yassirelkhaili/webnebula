import Logo from "../utils/logohandler"
import { footerContent, footerContentProps, socialsContentProps, sectionContent, copyrightNotice } from "../constants/footer"
import socialsContent from "../constants/footer"
import Link from "next/link"

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
             { footerContent.map((footerItem : footerContentProps) => {
                return (
                    <div>
                    <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-slate-50">{footerItem.sectionTitle}</h2>
                    <ul className="text-slate-500 dark:text-slate-400 font-medium">
                        {footerItem.sectionContent.map(((liItem : sectionContent, index : number) => {
                            return (
                                <li className={index === 0 ? "mb-4" : ""}>
                            <Link href={liItem.href} className="hover:underline">{liItem.title}</Link>
                        </li>
                            )
                        }))}
                    </ul>
                </div>
                )
             }) }
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">{copyrightNotice.currentDate}<a href="https://Webnebula.pro/" className="hover:underline">{copyrightNotice.siteName}</a>{copyrightNotice.copyrightStatement}
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {socialsContent.map((socialsItem: socialsContentProps) => {
                return (
              <a href={socialsItem.href} className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-50">
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