'use client'
import PixelEditor from "@/components/pixelEditor";
import { Card, CardContent } from "@/components/card";
import { useState } from "react";

function ModelSelector() {
  const [selected, setSelected] = useState<string | null>(null)

  const options = ["K-Nearest Neighbors", "Neural Network"]

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`w-full text-left px-3 py-2 rounded-md border transition
            ${selected === option
              ? "bg-gray-500 text-white border-gray-500"
              : "border-gray-200 hover:bg-gray-100"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}


export default function mainPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <h1 className="text-4xl font-bold pl-10 pb-5 pt-10 bg-white">Digits Classifier</h1>
        <div className="border border-gray-200 w-full mb-10"></div>

        <div className="flex justify-center items-center h-[calc(90vh-150px)]">
          <Card className="w-1/2">
            <CardContent>
              <div className="flex justify-center gap-10 m-10">
                <div className="flex flex-col items-center gap-6">
                  <PixelEditor />
                  <button className="px-6 py-2 text-black font-semibold rounded-xl shadow-md hover:bg-gray-200 transition duration-300">
                    Classify !
                  </button>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <div className=" h-[200px] border border-gray-300 p-4 rounded-lg min-w-[250px]">
                    <ModelSelector />
                  </div>
                  <div className="border border-gray-300 p-4 rounded-lg w-[250px] mt-3">
                      <p>Result:</p>
                    </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
