import LinkButton from "@/components/LinkButton";
import { ResultContext } from "lib/contexts";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ResultPage() {
    const { result } = useContext(ResultContext);
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center p-16">
                {result &&
                    <>
                        <div className="bg-purple-200 border border-purple-400 text-purple-700 px-4 py-3 rounded relative xs:w-full md:w-1/2 mx-auto" role="alert">
                            <h3 className="font-bold text-4xl xs:text-2xl break-words">{result.title}</h3>
                            <p className="block text-2xl break-words">{result?.description}</p>
                        </div>

                        <p className="mt-3 text-2xl">
                            Thank you for taking the test! We hope you enjoyed it.
                        </p>
                        <p className="mt-3 text-xl">
                            You can now close this window.
                        </p>
                        <div className="flex justify-start mt-2">
                             <LinkButton href="/">Go back to home</LinkButton>
                        </div>
                    </>
                }
            </main>
        </div>
    );
}