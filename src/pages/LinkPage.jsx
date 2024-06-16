import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Shirt, Users } from "lucide-react";

const LinkPage = () => {

  const userAntrian = []

    return (
        <>
          <div className="wrapper h-screen flex justify-center items-center">
            <Accordion type="single" className="w-72 text-black border border-black rounded-lg p-4 pb-5"  collapsible>
              <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-3">
                  <Shirt />Aplikasi Seragam
                </div>
              </AccordionTrigger>
                <AccordionContent  className="text-gray-500">
                  <ul className="pl-2">
                    <li className="
                      focus:outline-none hover:my-1 hover:p-2 hover:px-4 hover:border hover:rounded-lg hover:border-none hover:bg-gray-500 hover:text-white transition-all duration-200 my-1">
                      <a href="https://admin-ppdb.sekolahwijayakusuma.sch.id/sistem-seragam/login">Login ke Admin Gudang</a>
                    </li>
                    <li className="
                      focus:outline-none hover:my-1 hover:p-2 hover:px-4 hover:border hover:rounded-lg hover:border-none hover:bg-gray-500 hover:text-white transition-all duration-200 my-1">
                      <a href="https://admin-ppdb.sekolahwijayakusuma.sch.id/sistem-seragam/login">Login ke Admin Ukur</a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex gap-3">
                    <Users />
                    Aplikasi Antrian
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  <ul className="pl-2">
                    <li className="
                      focus:outline-none hover:my-1 hover:p-2 hover:px-4 hover:border hover:rounded-lg hover:border-none hover:bg-gray-500 hover:text-white transition-all duration-200 my-1">
                      <a href="https://admin-ppdb.sekolahwijayakusuma.sch.id/sistem-antrean/antrian/daftar">Login ke Admin Daftar Antrian</a>
                    </li>
                    <li className="
                      focus:outline-none hover:my-1 hover:p-2 hover:px-4 hover:border hover:rounded-lg hover:border-none hover:bg-gray-500 hover:text-white transition-all duration-200 my-1">
                      <a href="https://admin-ppdb.sekolahwijayakusuma.sch.id/sistem-antrean/login">Login ke Admin Panggil Antrian</a>
                    </li>
                    <li className="
                      focus:outline-none hover:my-1 hover:p-2 hover:px-4 hover:border hover:rounded-lg hover:border-none hover:bg-gray-500 hover:text-white transition-all duration-200 my-1">
                      <a href="https://admin-ppdb.sekolahwijayakusuma.sch.id/sistem-antrean/antrian">Display Antrian</a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </>
    )
}

export default LinkPage;