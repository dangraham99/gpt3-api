import { useState } from "react";
import AlertBox from "./components/AlertBox";
import Header from "./components/Header";
import PromptInput from "./components/PromptInput";
import ResponseBox from "./components/ResponseBox";
import { getResponse } from "./helpers/OpenAIHelper";



function App() {

  const [responseText, setResponseText] = useState("Laborum consequat exercitation sint eu Lorem. Laborum mollit mollit laboris deserunt consequat. Esse voluptate laboris anim ex. Id enim Lorem cillum cupidatat dolore culpa. Proident proident dolor anim ad ea. Nisi dolor cillum ex incididunt cupidatat dolore consectetur id.")
  const [promptText, setPromptText] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false);


  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    let response = await getResponse(promptText);
    setResponseText(response)
    setIsLoading(false)

  }


  const handleCopy = () => {
    navigator.clipboard.writeText(responseText).then(setCopied(true)).catch((e) => alert("Copy error: " + e.message))


    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };




  return (
    <div className="App">
      <div class="px-12 sm:px-0 sm:w-2/3 lg:w-1/3 mx-auto text-center">
        <Header />
        <PromptInput handleSubmit={handleSubmit} promptText={promptText} setPromptText={setPromptText} />
        <ResponseBox handleRefresh={handleSubmit} handleCopy={handleCopy} copied={copied} isLoading={isLoading} onResponse={setResponseText} responseText={responseText} />

      </div>
    </div>
  );
}

export default App;
