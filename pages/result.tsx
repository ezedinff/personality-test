import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import result from "./api/result";

export default function ResultPage() {
    const router = useRouter();
    const query = router.query;
    const [result, setResult] = useState<{ title: string; description: string; }>();
    const [error, setError] = useState<string>();
    useEffect(() => {
        if (query && query.result) {
            try {
                const result = JSON.parse(query.result as string);
                setResult(result);
            } catch (error) {
                setError("Something went wrong. Please try again later.");
            }
        }
    }, [query]);


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
                            <button
                                className="mt-5 text-2xl font-bold text-white bg-purple-600 rounded-md p-3 hover:bg-purple-700 cursor-pointer"
                                onClick={() => router.push("/")}
                            >
                                Go back to home
                            </button>
                        </div>
                    </>
                }
                {error &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-1/3 mx-auto" role="alert">
                        {error}
                    </div>
                }

            </main>
        </div>
    );
}