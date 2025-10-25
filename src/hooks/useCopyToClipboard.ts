import React from "react";

function oldSchoolCopy(text:string) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

export function useCopyToClipboard(): [
    string | null,
    (value: string) => void
  ]{
  const [state, setState] = React.useState<string | null>(null);
  //Call useCallback at the top level of your component to cache a function definition between re-renders:
  //https://www.chakshunyu.com/blog/how-to-type-react-usecallback-using-typescript/
  const copyToClipboard = React.useCallback((value:string) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error("writeText not supported");
        }
      } catch (e) {
        console.log(e)
        oldSchoolCopy(value);
        setState(value);
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipboard];
}
